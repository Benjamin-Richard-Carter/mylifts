"use client";
import { Logo } from "~/components/ui/Logo";
import { UserTag } from "~/components/ui/UserTag";
import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();

  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3">
      <Logo />

      <UserTag onClick={() => router.push("/settings")} />
    </div>
  );
};
