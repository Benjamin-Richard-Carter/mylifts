"use client";
import { UseSortableArguments, useSortable } from "@dnd-kit/sortable";
import { SortableCTX } from "./dndContext";

type Props = {
  opacityOnDrag?: number;
  params: UseSortableArguments;
  children: React.ReactNode;
};

export const DndSortableWrapper = ({
  children,
  params,
  opacityOnDrag,
}: Props) => {
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
