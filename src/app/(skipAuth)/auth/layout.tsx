"use client";
import { LayoutGroup } from "framer-motion";
import { HeroBar } from "~/components/ui/elements/heroBar";

export default async function AuthDialogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroBar>
        <span className="w-full p-4 text-center text-4xl tracking-wider text-content-1 ">
          mylifts
        </span>
      </HeroBar>

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
