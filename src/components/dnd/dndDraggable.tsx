"use client";
import { useDraggable, UseDraggableArguments } from "@dnd-kit/core";
import { DraggableCTX } from "./dndContext";

type Props = {
  opacityOnDrag?: number;
  params: UseDraggableArguments;
  children: React.ReactNode;
};

export const DndDraggableWrapper = ({
  children,
  params,
  opacityOnDrag,
}: Props) => {
  const draggableReturn = useDraggable({ ...params });
  const { attributes, listeners, setNodeRef, isDragging } = draggableReturn;

  const style = {
    opacity: isDragging ? (opacityOnDrag ? opacityOnDrag : 0) : 1,
  };

  return (
    <DraggableCTX.Provider value={{ ...draggableReturn }}>
      <span ref={setNodeRef} {...attributes} {...listeners} style={style}>
        {children}
      </span>
    </DraggableCTX.Provider>
  );
};
