import { UserTag } from "~/components/ui/UserTag";
import { SettingsMenu } from "~/components/ui/SettingsMenu";
import { SessionMenu } from "~/components/ui/SessionMenu";

export default function Page() {
  return (
    <div className="container flex w-full flex-row items-center justify-between gap-3">
      <UserTag />

      <div className="flex gap-2 ">
        <SessionMenu />
        <SettingsMenu />
      </div>
    </div>
  );
}
