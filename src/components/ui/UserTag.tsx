"use client";
import { Pill } from "~/components/ui/Pill";
import { useSession } from "next-auth/react";
import { ImSpinner3 } from "react-icons/im";

type Props = {
  onClick?: React.MouseEventHandler;
};

export const UserTag = ({ onClick }: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return (
      <Pill layoutMode="shrink" background="secondary" text="primary">
        <span className="animate-spin px-10 text-2xl">
          <ImSpinner3 />
        </span>
      </Pill>
    );
  }

  return (
    <Pill
      layoutMode="shrink"
      layoutID="usertag"
      background="secondary"
      text="primary"
      onClick={onClick}
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
