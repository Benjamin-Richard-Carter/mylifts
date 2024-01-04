import "~/styles/globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ReduxProvider } from "~/components/redux/reduxProvider";
import { DndContextWrapper } from "~/components/dnd/dndContext";
import { Metadata } from "next";
import { getCutoutValue } from "~/styles/themes";
import type { PropsWithChildren } from "react";
import { AuthContextProvider } from "~/components/auth/authContextProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

const theme = "dark";

export const metadata: Metadata = {
  title: "mylifts",
  description: "mylifts - workout tracker",
  appleWebApp: {
    title: "mylifts",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export function generateViewport({}) {
  return {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
    viewportFit: "cover",
    themeColor: getCutoutValue(theme),
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${bebas.variable} ${theme} overscroll-contain`}
    >
      <body
        className={`flex h-full flex-col overflow-hidden overscroll-contain bg-background font-sans pr-safe pl-safe`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <AuthContextProvider>
            <ReduxProvider>
              <DndContextWrapper>{children}</DndContextWrapper>
            </ReduxProvider>
          </AuthContextProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
