"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import revalitateRouteLayout from "~/server/actions/updateTheme";

export const ThemeRefreshHandler = () => {
  const theme = useSession().data?.theme;

  useEffect(() => {
    revalitateRouteLayout();
  }, [theme]);

  return null;
};
