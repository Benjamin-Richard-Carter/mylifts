"use client";
import { signOut } from "next-auth/react";
import { Pill } from "~/components/ui/primatives/Pill";
import { Logo } from "~/components/ui/primatives/logo";
import { useSession } from "next-auth/react";

export const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3 p-4">
      <Logo />

      <Pill layoutMode="shrink" onClick={() => signOut()}>
        <span className="flex h-full w-full items-center justify-center bg-zinc-200 p-3">
          {session?.user?.name}
        </span>
      </Pill>
    </div>
  );
};
