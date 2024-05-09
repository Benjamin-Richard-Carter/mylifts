import { DndDraggableWrapper } from "../dnd/dndDraggable";

type Props = {
  set: {
    id: string;
    exerciseId: string;
    workoutId: string;
    setGroupId: string;
    index: string;
  };
};

export const WorkoutSet = ({ set }: Props) => {
  return (
    <DndDraggableWrapper key={set.id} params={{ id: set.id }}>
      <div key={set.id} className="bg-blue-400">
        {set.index}
      </div>
    </DndDraggableWrapper>
  );
};
