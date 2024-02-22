import { UserTag } from "~/components/ui/UserTag";

export default function Page() {
  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3">
      <UserTag />

      <div className="flex gap-2 "></div>
    </div>
  );
}
