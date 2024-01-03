"use client";
import type { PropsWithChildren } from "react";

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky top-0 w-full">
      <div className="flex max-w-full bg-surface-1 pt-safe">{children}</div>
    </div>
  );
};
