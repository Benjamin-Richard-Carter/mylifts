"use client";
import type { PropsWithChildren } from "react";
import { LayoutGroup } from "framer-motion";

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <LayoutGroup id="nav" key={1}>
      <div className="sticky top-0 w-full">
        <div className="flex h-20 max-w-full bg-surface-1 pt-safe">
          {children}
        </div>
      </div>
    </LayoutGroup>
  );
};
