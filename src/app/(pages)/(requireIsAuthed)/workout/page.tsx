"use client";
import { useContext, useState } from "react";
import { DndSortableGroup } from "~/components/dnd/dndSortableGroup";
import { DraggableItem, SortableItem } from "~/types/dnd";
import { LayoutGroup, motion } from "framer-motion";
import { DraggableCTX, SortableCTX } from "~/components/dnd/dndContext";
import { reorderItems, useDndIntersectionMonitor } from "~/utils/dnd";

type Props = {
  searchParams: { id: string };
};

export default function HomePage({ searchParams }: Props) {
  const [list, setList] = useState<SortableItem[]>([]);

  useDndIntersectionMonitor({
    holdOverTime: 750,
    holdOverThreshold: 0.2,

    onDragMove({ active, over }) {
      setList(reorderItems(list, active, over));
    },

    onDragHoldover({ active, over }) {
      console.log("Holdover", active, over);
    },
  });

  type ExerciseProps = {
    id: string;
    overlay?: boolean;
  };

  const Exercise = ({ id }: ExerciseProps) => {
    const value = useContext(SortableCTX);
    const { setNodeRef, attributes, listeners } = value || {};

    return (
      <div
        className="bg-red-300 p-3"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        test
      </div>
    );
  };

  const addToList = () => {
    const id = Math.random().toString(36).slice(2, 7);

    setList((prev) => {
      return [
        ...prev,
        {
          params: {
            id: id,
          },
        },
      ];
    });
  };

  const render = (props: any) => {
    return (
      <Exercise key={props.id} {...props}>
        {props.id}
      </Exercise>
    );
  };

  return (
    <LayoutGroup>
      <div className="container flex flex-col gap-3">
        <button onClick={addToList}>add to list</button>
        <DndSortableGroup items={list} render={render} />
      </div>
    </LayoutGroup>
  );
}
