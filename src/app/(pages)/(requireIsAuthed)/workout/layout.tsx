"use client";
import { NavBar } from "~/components/nav/navBar";

type Props = {
  children: React.ReactNode;
  navMain: React.ReactNode;
  navTimer: React.ReactNode;
};

export default function Layout({ children, navMain, navTimer }: Props) {
  return (
    <>
      <NavBar>{navMain}</NavBar>
      {children}
    </>
  );
}
