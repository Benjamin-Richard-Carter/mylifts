"use client";
import { DragMoveEvent, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { PresentationalCTX } from "./dndContext";
import { useState } from "react";

type Props = {
  children: React.ReactNode | undefined;
};

export const DndPresentational = ({ children }: Props) => {
  const [activeData, setActiveData] = useState<DragMoveEvent | null>(null);

  useDndMonitor({
    onDragMove(event) {
      setActiveData(event);
    },
    onDragEnd() {
      setActiveData(null);
    },
  });

  return (
    <DragOverlay>
      <PresentationalCTX.Provider value={activeData}>
        {children}
      </PresentationalCTX.Provider>
    </DragOverlay>
  );
};
