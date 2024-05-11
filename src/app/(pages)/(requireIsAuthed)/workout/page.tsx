"use client";
import { useContext, useState } from "react";
import { DndSortableGroup } from "~/components/dnd/dndSortableGroup";
import { SortableItem } from "~/types/dnd";
import { LayoutGroup, motion } from "framer-motion";
import { SortableCTX } from "~/components/dnd/dndContext";

type Props = {
  searchParams: { id: string };
};

export default function HomePage({ searchParams }: Props) {
  const [list, setList] = useState<SortableItem[]>([]);

  const Exercise: React.FC = () => {
    const value = useContext(SortableCTX);

    const { setNodeRef, attributes, listeners, isDragging } = value || {};

    const style = {
      opacity: isDragging ? 0 : 1,
    };

    return (
      <motion.div
        layout="position"
        transition={{ duration: 0.2 }}
        className="bg-red-300 p-3"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
        test
      </motion.div>
    );
  };

  const addToList = () => {
    const id = Math.random().toString(36).slice(2, 7);

    setList((prev) => {
      return [
        ...prev,
        {
          element: <Exercise key={id} />,

          params: {
            id: id,
          },
        },
      ];
    });
  };

  const receiveNewList = (newList: SortableItem[]) => {
    setList(newList);
  };

  return (
    <LayoutGroup>
      <div className="container flex flex-col gap-3">
        <button onClick={addToList}>add to list</button>

        <DndSortableGroup
          items={list}
          receiveNewList={receiveNewList}
          render={(props) => (
            <Exercise key={props.id} {...props}>
              {props.id}
            </Exercise>
          )}
        />
      </div>
    </LayoutGroup>
  );
}
