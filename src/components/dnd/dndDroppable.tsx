"use client";
import { useDroppable } from "@dnd-kit/core";
import type { UseDroppableArguments } from "@dnd-kit/core";
import { DroppableCTX } from "./dndContext";
import type { PropsWithChildren } from "react";

type Props = {
  params: UseDroppableArguments;
};

export const DndDroppableWrapper = ({
  children,
  params,
}: PropsWithChildren<Props>) => {
  const droppableReturn = useDroppable({ ...params });

  return (
    <span ref={droppableReturn.setNodeRef}>
      <DroppableCTX.Provider value={{ ...droppableReturn }}>
        {children}
      </DroppableCTX.Provider>
    </span>
  );
};
