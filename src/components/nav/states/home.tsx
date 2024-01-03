import { signOut } from "next-auth/react";
import { Pill } from "~/components/ui/primatives/Pill";
import { TbCheck } from "react-icons/tb";

export const Home = () => {
  return (
    <div className="container flex w-full flex-row justify-between gap-3 p-4">
      <Pill layoutMode="square">
        <span className="text-sm">
          <TbCheck />
        </span>
      </Pill>

      <Pill layoutMode="shrink" onClick={() => signOut()}>
        Sign out
      </Pill>
    </div>
  );
};
