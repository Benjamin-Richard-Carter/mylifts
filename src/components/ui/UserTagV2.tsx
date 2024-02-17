"use client";
import { Pill } from "~/components/ui/Pill";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { ImSpinner3 } from "react-icons/im";

export const UserTagV2 = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return (
      <Pill
        layoutMode="shrink"
        background="secondary"
        text="secondary"
        key="loader"
        layoutID="loader"
      >
        <span className="animate-spin px-8 text-xl">
          <ImSpinner3 />
        </span>
      </Pill>
    );
  }

  return (
    <Pill
      layoutMode="shrink"
      background="secondary"
      text="secondary"
      key="user-pill"
      layoutID="user-menu"
    >
      <motion.span
        className="flex h-full flex-row items-center gap-3 p-2 pr-3"
        key="user-content"
      >
        <>
          <motion.img
            src={session.user.image || undefined}
            className="aspect-square h-full rounded-full"
            layoutId="user-image"
            key="user-image"
            referrerPolicy="no-referrer"
          />

          <motion.span layoutId="user-nametag" key="user-nametag">
            {session.user.name}
          </motion.span>
        </>
      </motion.span>
    </Pill>
  );
};
