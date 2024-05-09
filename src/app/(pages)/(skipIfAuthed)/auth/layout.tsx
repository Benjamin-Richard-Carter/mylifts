"use client";
import { LayoutGroup } from "framer-motion";
import { NavBar } from "~/components/nav/navBar";
import type { PropsWithChildren } from "react";

export default function AuthDialogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar>sd</NavBar>

      <div className="container flex h-full grow">
        <div className="flex grow items-center justify-center">
          <div className="w-80">
            <LayoutGroup id="auth">{children}</LayoutGroup>
          </div>
        </div>
      </div>
    </>
  );
}
