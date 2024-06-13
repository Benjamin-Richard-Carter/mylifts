"use client";
import { PropsWithChildren, useContext } from "react";
import { DndSortableGroup } from "~/components/dnd/dndSortableGroup";
import { LayoutGroup, motion } from "framer-motion";
import { SortableCTX } from "~/components/dnd/dndContext";
import { useDndIntersectionMonitor } from "~/utils/dnd";
import { api } from "~/trpc/react";
import { SortableArray } from "~/types/dnd";

type Props = {
  searchParams: { id: string };
};

export default function HomePage({ searchParams }: Props) {
  const workout = api.workout.getWorkout.useQuery({
    workoutID: searchParams.id,
  });

  const refetch = workout.refetch;

  const createGroup = api.workout.createSetAndGroup.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const mergeSetIntoGroup = api.workout.mergeSetIntoGroup.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const handleMergeSetIntoGroup = async (
    targetSetID: string,
    newSetID: string,
  ) => {
    await mergeSetIntoGroup.mutateAsync({
      targetSetID,
      newSetID,
    });
  };

  const handleCreateGroup = async (
    workoutID: string,
    newGroupIndex: string,
  ) => {
    await createGroup.mutateAsync({
      workoutID,
      newGroupIndex,
    });
  };

  const setGroups = workout.data?.setGroups;
  type setGroups = typeof setGroups;

  type createSortableArray = (setGroups: setGroups) => SortableArray | null;

  const createSortableArray: createSortableArray = (setGroups) => {
    if (!setGroups) return null;

    return setGroups.map((group) => {
      return {
        id: group.id,
        params: {
          id: group.id,
          data: { type: "group" },
        },
        render: (props: any) => {
          return <DraggableGroup key={props.id} {...props} />;
        },
        children: group.sets.map((set) => {
          return {
            id: set.id,
            params: {
              id: set.id,
              data: { type: "set" },
            },
            render: (props: any) => {
              return <DraggableItem key={props.id} {...props} />;
            },
          };
        }),
      };
    });
  };

  const tree = createSortableArray(setGroups);

  useDndIntersectionMonitor({
    holdOverTime: 300,
    holdOverThreshold: 0.2,
    onDragHoldover({ active, over }) {
      console.log("holdover registered");
      if (!over || !active) return;

      const activeType = active.data.current?.type;
      const overType = over.data.current?.type;

      if (activeType === "group" && overType === "group") {
        console.log("group to group");
      }

      if (activeType === "set" && overType === "set") {
        console.log("set to set");

        handleMergeSetIntoGroup(active.id as string, over.id as string);
      }

      if (activeType === "set" && overType === "group") {
        console.log("set to group");
      }

      // const doesActiveAcceptOver = active.data.current?.accepts.some(
      //   (accepts) => over.data.current?.accepts.includes(accepts),
      // );

      //handleMerge(active.id as string, over.id as string);
    },

    onDragMove({ active, over }) {
      console.log("drag move registered");
    },
  });

  type Props = {
    id: string;
  };

  const DraggableItem = ({ id, children }: PropsWithChildren<Props>) => {
    const { setNodeRef, listeners, attributes } = useContext(SortableCTX) || {};

    return (
      <div
        className={`flex select-none flex-col gap-1 bg-green-500 p-2`}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
      >
        <div className="flex flex-row justify-between">
          <span>{id}</span>
        </div>

        <div className="flex flex-col gap-1">{children}</div>
      </div>
    );
  };

  const DraggableGroup = ({ id, children }: PropsWithChildren<Props>) => {
    const { setNodeRef, listeners, attributes } = useContext(SortableCTX) || {};

    return (
      <motion.div
        className={`flex select-none flex-col gap-1 bg-red-500 p-2`}
        layout
        {...listeners}
        {...attributes}
        ref={setNodeRef}
      >
        <div className="flex flex-row justify-between">
          <span>{id}</span>
        </div>

        <div className="flex flex-col gap-1">{children}</div>
      </motion.div>
    );
  };

  return (
    <LayoutGroup>
      <button onClick={() => handleCreateGroup(searchParams.id, "1")}>
        Create Group
      </button>

      <div className="container flex flex-col gap-3">
        {tree && <DndSortableGroup items={tree} />}
      </div>
    </LayoutGroup>
  );
}
