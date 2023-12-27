"use client";
import { useState } from "react";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { DndDraggableWrapper } from "../primatives/dndDraggable";
import { DraggableItem } from "~/types/dnd";

type Props = {
  items: DraggableItem[];
  opacityOnDrag?: number;
};

export const DndDraggableGroup = ({ items, opacityOnDrag }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.params.id === activeId);

  useDndMonitor({
    onDragStart(event) {
      setActiveId(event.active.id as string);
    },

    onDragEnd() {
      setActiveId(null);
    },
  });

  return (
    <>
      {items.map(({ params, element }) => (
        <DndDraggableWrapper
          params={{ id: params.id }}
          key={params.id}
          opacityOnDrag={opacityOnDrag}
        >
          {element}
        </DndDraggableWrapper>
      ))}

      <DragOverlay>{activeItem?.element}</DragOverlay>
    </>
  );
};
