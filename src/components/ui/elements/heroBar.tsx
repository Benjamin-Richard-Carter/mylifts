"use client";

import { PropsWithChildren } from "react";

export const HeroBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky top-0 w-full">
      <div className="font-display flex max-w-full bg-surface-1 pt-safe">
        {children}
      </div>
    </div>
  );
};
