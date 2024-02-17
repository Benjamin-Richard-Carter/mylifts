import type { PropsWithChildren } from "react";
import { auth } from "~/auth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function SkipIfAuthed({ children }: Props) {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }
  return <>{children}</>;
}
