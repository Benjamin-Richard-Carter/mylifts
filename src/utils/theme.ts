import { auth } from "~/auth";
import { themes } from "~/styles/themes";

export const getCutoutValue = (themeName: string) => {
  const theme = themes[themeName];
  return theme?.cutout ?? "#000000";
};

export const getBackgroundValue = (themeName: string) => {
  const theme = themes[themeName];
  return theme?.background ?? "#000000";
};

export const getSessionTheme = async (): Promise<string> => {
  const session = await auth();
  return session?.theme ?? "default";
};
