import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ReduxProvider } from "~/redux/reduxProvider";
import { DndContextWrapper } from "~/components/dnd/dndContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const theme = "default";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${theme} container bg-surface-200 `}
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
