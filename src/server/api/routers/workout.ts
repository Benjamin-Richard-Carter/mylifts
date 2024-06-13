import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { LexoRank } from "lexorank";

export const workoutRouter = createTRPCRouter({
  createWorkout: protectedProcedure.mutation(async ({ ctx }) => {
    await db.workout.create({
      data: {
        title: "New Workout",
        user: {
          connect: { id: ctx.session.user.id },
        },
      },
    });
  }),

  updateSetIndex: protectedProcedure
    .input(z.object({ setID: z.string(), newIndex: z.string() }))
    .mutation(async ({ input }) => {
      await db.set.update({
        where: { id: input.setID },
        data: { index: input.newIndex },
      });
    }),

  updateGroupIndex: protectedProcedure
    .input(z.object({ setGroupID: z.string(), newIndex: z.string() }))
    .mutation(async ({ input }) => {
      await db.setGroup.update({
        where: { id: input.setGroupID },
        data: { index: input.newIndex },
      });
    }),

  createSetAndGroup: protectedProcedure
    .input(z.object({ workoutID: z.string(), newGroupIndex: z.string() }))
    .mutation(async ({ input }) => {
      await db.setGroup.create({
        data: {
          workoutId: input.workoutID,
          index: input.newGroupIndex,
          sets: {
            create: {
              exerciseId: "cll5wcwgd000110ur2zbdcmfi",
              workoutId: input.workoutID,
              index: LexoRank.middle().toString(),
            },
          },
        },
      });
    }),

  mergeSetIntoGroup: protectedProcedure
    .input(
      z.object({
        targetSetID: z.string(),
        newSetID: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      // search setGroups to find the group that the targetSetID is in

      const oldSetGroup = await db.setGroup.findFirst({
        where: {
          sets: {
            some: {
              id: input.targetSetID,
            },
          },
        },
      });

      const newSetGroup = await db.setGroup.findFirst({
        where: {
          sets: {
            some: {
              id: input.newSetID,
            },
          },
        },
      });

      await db.$transaction([
        db.set.update({
          where: { id: input.targetSetID },
          data: { setGroup: { connect: { id: newSetGroup?.id } } },
        }),

        // if the oldSetGroup has no more sets, delete it

        db.setGroup.deleteMany({
          where: {
            id: oldSetGroup?.id,
            sets: {
              none: {},
            },
          },
        }),
      ]);
    }),

  mergeSetGroup: protectedProcedure
    .input(
      z.object({
        mergingGroupID: z.string(),
        targetGroupID: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const mergingGroup = await db.setGroup.findUnique({
        where: { id: input.mergingGroupID },
        include: { sets: true },
      });

      const targetGroup = await db.setGroup.findUnique({
        where: { id: input.targetGroupID },
        include: { sets: true },
      });

      if (!mergingGroup || !targetGroup) {
        throw new Error("Invalid group ID");
      }

      await db.$transaction([
        db.set.updateMany({
          where: { setGroupId: input.mergingGroupID },
          data: { setGroupId: input.targetGroupID },
        }),
        db.setGroup.delete({ where: { id: input.mergingGroupID } }),
      ]);
    }),

  getWorkout: protectedProcedure
    .input(z.object({ workoutID: z.string() }))
    .query(async ({ input }) => {
      const workout = await db.workout.findUnique({
        where: {
          id: input.workoutID,
        },

        select: {
          title: true,
          completed: true,
          id: true,
          created: true,
          setGroups: {
            select: {
              id: true,
              index: true,
              sets: {
                select: {
                  id: true,
                  index: true,
                  exerciseId: true,
                },
              },
            },
          },
        },
      });

      return workout;
    }),
});
