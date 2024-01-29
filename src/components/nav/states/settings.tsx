"use client";

import { UserTag } from "~/components/ui/UserTag";
import { useRouter } from "next/navigation";
import { Pill } from "~/components/ui/Pill";
import { TbArrowBackUp } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { signOut } from "next-auth/react";

export const Settings = () => {
  const router = useRouter();

  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3">
      <Pill
        layoutMode="square"
        background="secondary"
        text="primary"
        onClick={() => router.push("/home")}
      >
        <span className="text-2xl">
          <TbArrowBackUp />
        </span>
      </Pill>

      <UserTag />

      <Pill
        layoutMode="square"
        background="secondary"
        text="primary"
        onClick={() => signOut()}
      >
        <span className="text-2xl">
          <TbLogout2 />
        </span>
      </Pill>
    </div>
  );
};
