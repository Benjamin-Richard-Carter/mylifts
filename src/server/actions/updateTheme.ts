"use server";
import { revalidatePath } from "next/cache";
import { unstable_update } from "~/auth";

export default async function updateTheme(theme: string) {
  await unstable_update({ theme });
  revalidatePath("/", "layout");
}
