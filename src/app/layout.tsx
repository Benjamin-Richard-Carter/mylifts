import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ReduxProvider } from "~/components/redux/reduxProvider";
import { DndContextWrapper } from "~/components/dnd/primatives/dndContext";
import { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "mylifts",
  description: "mylifts - workout tracker",

  appleWebApp: {
    title: "mylifts",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

const theme = "light";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${theme} container overflow-hidden bg-surface-2 `}
      >
        <div className="pt-safe bg-surface-1"></div>

        <TRPCReactProvider cookies={cookies().toString()}>
          <ReduxProvider>
            <DndContextWrapper>{children}</DndContextWrapper>
          </ReduxProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
