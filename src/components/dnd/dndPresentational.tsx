"use client";
import {
  DragEndEvent,
  DragMoveEvent,
  UniqueIdentifier,
  useDndMonitor,
} from "@dnd-kit/core";
import { useState } from "react";
import { getEventRects, getRectTransform } from "~/utils/dnd";
import { motion } from "framer-motion";
import { PresentationalCTX } from "~/components/dnd/dndContext";

type Props = {
  render: any;
  setHidden: (id: UniqueIdentifier | null) => void;
};

export const DndPresentational = ({ render, setHidden }: Props) => {
  const [activeData, setActiveData] = useState<DragMoveEvent | null>(null);
  const [finalData, setFinalData] = useState<DragEndEvent | null>(null);
  const [initialActiveRect, translatedActiveRect] = getEventRects(activeData);
  const [initialFinalRect, translatedFinalRect] = getEventRects(finalData);
  const transform = getRectTransform(initialActiveRect, translatedActiveRect);

  useDndMonitor({
    onDragStart(event) {
      setHidden(event.active.id);
      setFinalData(null);
    },
    onDragMove(event) {
      setActiveData(event);
    },
    onDragEnd(event) {
      setFinalData(event);
      setActiveData(null);
    },
  });

  const handleCleanup = () => {
    setHidden(null);
    setFinalData(null);
  };

  return (
    <PresentationalCTX.Provider value={activeData}>
      {activeData && (
        <motion.div
          style={{ position: "fixed", transform, ...initialActiveRect }}
        >
          {render({ id: "placeholder" })}
        </motion.div>
      )}

      {finalData && (
        <motion.div
          transition={{ type: "spring", duration: 0.5 }}
          style={{ position: "fixed" }}
          initial={{ ...translatedFinalRect }}
          animate={{ ...initialFinalRect }}
          onAnimationComplete={() => handleCleanup()}
        >
          {render({ id: "exiting" })}
        </motion.div>
      )}
    </PresentationalCTX.Provider>
  );
};
