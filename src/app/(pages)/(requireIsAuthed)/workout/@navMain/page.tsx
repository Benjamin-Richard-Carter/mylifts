"use client";
import { Pill } from "~/components/ui/Pill";
import { TbArrowBackUp, TbMenu2 } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="container flex w-full flex-row items-center gap-3">
      <Pill
        layoutMode="square"
        background="secondary"
        text="secondary"
        className="text-2xl"
        onClick={() => router.push("/home")}
        children={<TbArrowBackUp />}
      />

      <Pill layoutMode="expand" background="secondary" className="text-lg">
        Push
      </Pill>

      <Pill
        layoutMode="square"
        background="secondary"
        text="secondary"
        className="text-2xl"
        children={<TbMenu2 />}
      />
    </div>
  );
}
