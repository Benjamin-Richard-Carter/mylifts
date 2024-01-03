"use client";
import { useSession } from "next-auth/react";
import type { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const { status } = useSession();

  // if (status === "loading") {
  //   return <>loading...</>;
  // }

  if (status === "authenticated") {
    router.push("/home");
  }

  return <>{children}</>;
}
