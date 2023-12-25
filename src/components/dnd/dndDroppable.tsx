"use client";
import { useDroppable } from "@dnd-kit/core";
import type { UseDroppableArguments } from "@dnd-kit/core";
import { DroppableCTX } from "./dndContext";

type Props = {
  children: React.ReactNode;
  params: UseDroppableArguments;
};

export const DndDroppableWrapper = ({ children, params }: Props) => {
  const droppableReturn = useDroppable({ ...params });

  const { over, isOver } = droppableReturn;

  return (
    <span ref={droppableReturn.setNodeRef}>
      <DroppableCTX.Provider value={{ ...droppableReturn }}>
        {children}
      </DroppableCTX.Provider>
    </span>
  );
};
