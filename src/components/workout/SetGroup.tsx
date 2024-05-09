import { DndDroppableWrapper } from "../dnd/dndDroppable";
import { WorkoutSet } from "./Set";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { useDndMonitor } from "@dnd-kit/core";

type Props = {
  setGroup: {
    id: string;

    sets: {
      id: string;
      exerciseId: string;
      workoutId: string;
      setGroupId: string;
    }[];
  };
};

export const WorkoutSetGroup = ({ setGroup }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const debouncedIsHovered = useDebounce(isHovered, 300);

  useDndMonitor({
    onDragMove(event) {
      if (event.over?.id === setGroup.id) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    },
    onDragEnd() {
      setIsHovered(false);
    },
  });

  return (
    <DndDroppableWrapper key={setGroup.id} params={{ id: setGroup.id }}>
      <div key={setGroup.id} className="bg-red-400 p-3">
        {debouncedIsHovered && <div className="bg-blue-400">drop here</div>}
        {setGroup.sets.map((set) => (
          <WorkoutSet set={set} />
        ))}
      </div>
    </DndDroppableWrapper>
  );
};
