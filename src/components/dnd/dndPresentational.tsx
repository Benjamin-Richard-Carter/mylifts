"use client";
import {
  DragEndEvent,
  DragMoveEvent,
  UniqueIdentifier,
  useDndMonitor,
} from "@dnd-kit/core";
import { PropsWithChildren, useState } from "react";
import { getEventRects, getRectTransform } from "~/utils/dnd";
import { motion } from "framer-motion";
import { PresentationalCTX } from "~/components/dnd/dndContext";

type Props = {
  setHidden: (id: UniqueIdentifier | null) => void;
};

export const DndPresentational = ({
  children,
  setHidden,
}: PropsWithChildren<Props>) => {
  const [activeData, setActiveData] = useState<DragMoveEvent | null>(null);
  const [finalData, setFinalData] = useState<DragEndEvent | null>(null);
  const [initialActiveRect, translatedActiveRect] = getEventRects(activeData);
  const [initialFinalRect, translatedFinalRect] = getEventRects(finalData);
  const transform = getRectTransform(initialActiveRect, translatedActiveRect);

  useDndMonitor({
    onDragStart() {
      handleCleanup();
    },
    onDragMove(event) {
      setActiveData(event);
      setHidden(event.active.id);
    },
    onDragEnd(event) {
      setFinalData(event);
      setActiveData(null);
    },
  });

  const handleCleanup = () => {
    setFinalData(null);
    setHidden(null);
  };

  return (
    <PresentationalCTX.Provider value={activeData}>
      {activeData && (
        <motion.div
          style={{
            position: "fixed",
            transform,
            ...initialActiveRect,
            zIndex: 999,
          }}
        >
          {children}
        </motion.div>
      )}

      {finalData && (
        <motion.div
          transition={{ type: "spring", duration: 0.5 }}
          style={{ position: "fixed", zIndex: 999 }}
          initial={{ ...translatedFinalRect }}
          animate={{ ...initialFinalRect }}
          onAnimationComplete={() => handleCleanup()}
        >
          {children}
        </motion.div>
      )}
    </PresentationalCTX.Provider>
  );
};
