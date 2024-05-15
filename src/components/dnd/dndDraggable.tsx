"use client";
import { DraggableCTX } from "./dndContext";
import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";

type Props = {
  params: UseDraggableArguments;
  render: any;
};

export const DndDraggableWrapper = ({ params, render }: Props) => {
  const draggableReturn = useDraggable({ ...params });

  return (
    <DraggableCTX.Provider value={{ ...draggableReturn }}>
      {render({ id: params.id })}
    </DraggableCTX.Provider>
  );
};
