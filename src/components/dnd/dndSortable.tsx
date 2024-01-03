"use client";
import { UseSortableArguments, useSortable } from "@dnd-kit/sortable";
import { SortableCTX } from "./dndContext";
import type { PropsWithChildren } from "react";

type Props = {
  opacityOnDrag?: number;
  params: UseSortableArguments;
};

export const DndSortableWrapper = ({
  children,
  params,
  opacityOnDrag,
}: PropsWithChildren<Props>) => {
  const sortableReturn = useSortable({ ...params });
  const { attributes, listeners, setNodeRef, isDragging } = sortableReturn;
  const style = {
    opacity: isDragging ? (opacityOnDrag ? opacityOnDrag : 0) : 1,
  };

  return (
    <SortableCTX.Provider value={{ ...sortableReturn }}>
      <span ref={setNodeRef} {...attributes} {...listeners} style={style}>
        {children}
      </span>
    </SortableCTX.Provider>
  );
};
