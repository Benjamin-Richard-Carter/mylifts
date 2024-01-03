"use client";
import { NavBar } from "~/components/ui/elements/navbar";
import { Pill } from "~/components/ui/primatives/Pill";
import { TbCheck } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <NavBar>
        <div className="flex flex-row gap-3 text-content-1">
          <Pill layoutMode="square">
            <TbCheck />
          </Pill>

          <Pill layoutMode="expand" onClick={() => signOut()}>
            Sign out
          </Pill>
        </div>
      </NavBar>
      LOGGED IN
    </>
  );
}
