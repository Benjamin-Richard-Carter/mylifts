import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ReduxProvider } from "~/components/redux/reduxProvider";
import { DndContextWrapper } from "~/components/dnd/primatives/dndContext";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "mylifts",
  description: "mylifts - workout tracker",
  viewport:
    "width=device-width, viewport-fit=contain, initial-scale=1.0, user-scalable=no",

  appleWebApp: {
    title: "mylifts",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

const theme = "dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${theme} container overflow-hidden bg-background `}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ReduxProvider>
            <DndContextWrapper>{children}</DndContextWrapper>
          </ReduxProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
