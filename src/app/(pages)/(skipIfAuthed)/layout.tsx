import type { PropsWithChildren } from "react";
import { auth } from "~/auth";
import { redirect } from "next/navigation";

export default async function SkipIfAuthed({ children }: PropsWithChildren) {
  const session = await auth();

  if (session) {
    redirect("/home");
  }
  return <>{children}</>;
}
