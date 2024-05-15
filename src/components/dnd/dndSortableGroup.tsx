"use client";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { DndSortableWrapper } from "./dndSortable";
import { DraggableItem, SortableItem } from "~/types/dnd";
import { useMemo, useState } from "react";
import { DndPresentational } from "./dndPresentational";
import { LayoutGroup, motion } from "framer-motion";
import { UniqueIdentifier } from "@dnd-kit/core";
import { DndDraggableWrapper } from "./dndDraggable";

type Props = {
  items: SortableItem[];
  render: any;
};

export const DndSortableGroup = ({ items, render }: Props) => {
  const itemIDs = useMemo(() => items.map((item) => item.params.id), [items]);
  const [hidden, setHidden] = useState<UniqueIdentifier | null>(null);

  const transition = {
    type: "spring",
    duration: 0.2,
  };

  return (
    <LayoutGroup>
      <SortableContext items={itemIDs}>
        {items.map((item) => (
          <motion.div
            layout
            key={item.params.id}
            transition={transition}
            style={{ opacity: hidden === item.params.id ? 0 : 1 }}
          >
            <DndSortableWrapper
              params={item.params}
              key={item.params.id}
              render={render}
            />
          </motion.div>
        ))}

        <DndPresentational render={render} setHidden={setHidden} />
      </SortableContext>
    </LayoutGroup>
  );
};
