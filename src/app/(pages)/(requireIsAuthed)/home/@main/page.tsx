import { UserTag } from "~/components/ui/UserTag";
import { Pill } from "~/components/ui/Pill";
import { TbBell, TbPlus } from "react-icons/tb";

export default function Page() {
  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3">
      <UserTag />

      <div className="flex gap-2 ">
        <Pill
          layoutMode="square"
          background="secondary"
          text="secondary"
          className="text-2xl"
          //onClick={() => router.push("/home")}
          children={<TbBell />}
        />
      </div>
    </div>
  );
}
