"use client";
import { Logo } from "~/components/ui/Logo";
import { UserTag } from "~/components/ui/UserTag";

export const Home = () => {
  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3 p-4">
      <Logo />
      <UserTag />
    </div>
  );
};
