"use client";
import { signOut } from "next-auth/react";
import { Pill } from "~/components/ui/Pill";
import { useSession } from "next-auth/react";
import { ImSpinner3 } from "react-icons/im";

export const UserTag = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return (
      <Pill layoutMode="square" background="secondary" text="primary">
        <span className="animate-spin text-2xl">
          <ImSpinner3 />
        </span>
      </Pill>
    );
  }

  return (
    <Pill
      layoutMode="shrink"
      background="secondary"
      text="primary"
      onClick={() => signOut()}
    >
      <span className="flex h-full flex-row items-center gap-3 p-2 pr-3">
        {session?.user?.image && (
          <img
            src={session?.user?.image}
            className="aspect-square h-full rounded-full"
          />
        )}
        {session?.user?.name}
      </span>
    </Pill>
  );
};
