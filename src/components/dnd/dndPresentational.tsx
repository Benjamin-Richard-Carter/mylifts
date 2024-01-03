"use client";
import { DragMoveEvent, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { PresentationalCTX } from "./dndContext";
import { useState } from "react";
import type { PropsWithChildren } from "react";

export const DndPresentational = ({ children }: PropsWithChildren) => {
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
