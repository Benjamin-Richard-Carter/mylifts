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
        targetGroupID: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const [newset] = await db.$transaction([
        db.set.update({
          where: { id: input.targetSetID },
          data: { setGroup: { connect: { id: input.targetGroupID } } },
        }),

        //db.setGroup.delete({ where: { id: input.targetGroupID } }),
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
              sets: true,
            },
          },
        },
      });

      return workout;
    }),
});
