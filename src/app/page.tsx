"use client";

import { NavBar } from "~/components/ui/elements/navbar";
import { Pill } from "~/components/ui/primatives/Pill";

export default function Home() {
  return (
    <>
      <NavBar>
        <div className="flex flex-row gap-3">
          <Pill square layoutMode="shrink">
            <div className="aspect-square p-4">O</div>
          </Pill>

          <Pill layoutMode="expand">fdg</Pill>
          <Pill layoutMode="expand">fdg</Pill>
        </div>
      </NavBar>
    </>
  );
}
