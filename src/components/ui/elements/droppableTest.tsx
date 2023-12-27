import { useContext } from "react";
import { DroppableCTX } from "~/components/dnd/primatives/dndContext";

type Props = {
  id: string;
};

export const DroppableTest = () => {
  const over = useContext(DroppableCTX)?.isOver;

  return <div className="bg-red-800 p-3">{over ? "over" : "not over"}</div>;
};
