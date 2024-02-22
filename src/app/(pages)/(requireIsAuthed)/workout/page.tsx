import { db } from "~/server/db";

export default async function HomePage() {
  const workout = await db.workout.findUnique({
    where: {
      id: "1",
    },
    include: {
      sets: true,
    },
  });

  console.log(workout);

  return <div className="container">Workout</div>;
}
