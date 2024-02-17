import "~/styles/globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ReduxProvider } from "~/components/redux/reduxProvider";
import { DndContextWrapper } from "~/components/dnd/dndContext";
import { Metadata, Viewport } from "next";
import { AuthContextProvider } from "~/components/auth/authContextProvider";
import { getSessionTheme } from "~/utils/theme";
import { getCutoutValue } from "~/utils/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
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

export async function generateViewport({}): Promise<Viewport> {
  return {
    width: "device-width",
    viewportFit: "cover",
    initialScale: 1.5,
    themeColor: getCutoutValue(await getSessionTheme()),
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const theme = await getSessionTheme();

  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${bebas.variable} ${theme} overscroll-contain`}
    >
      <body
        className={`flex h-full flex-col overflow-hidden overscroll-contain bg-background font-sans	transition-colors duration-700 pr-safe pl-safe	`}
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
