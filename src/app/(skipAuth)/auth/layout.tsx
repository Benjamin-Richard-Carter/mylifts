import { getBackgroundValue } from "~/styles/themes";

export function generateViewport({}) {
  return {
    themeColor: getBackgroundValue("dark"),
  };
}

export default async function AuthDialogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-80">{children}</div>
    </div>
  );
}
