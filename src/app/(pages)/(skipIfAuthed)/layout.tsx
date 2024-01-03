import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/home");
  }

  return <>{children}</>;
}
