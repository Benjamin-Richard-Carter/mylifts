"use client";

import { NavBar } from "~/components/ui/elements/navbar";
import { Pill } from "~/components/ui/primatives/Pill";
import { TbCheck } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <NavBar>
        <div className="flex flex-row gap-3 text-content-3">
          <Pill layoutMode="square" button>
            <TbCheck />
          </Pill>

          <Pill layoutMode="expand">Test</Pill>

          <Pill layoutMode="expand">Test1</Pill>

          <Pill layoutMode="shrink">Test2</Pill>
        </div>
      </NavBar>
    </>
  );
}
