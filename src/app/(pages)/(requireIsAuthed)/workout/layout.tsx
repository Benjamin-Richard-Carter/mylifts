"use client";
import { NavBar } from "~/components/nav/navBar";

export default function Layout({
  children,
  navMain,
  navTimer,
}: {
  children: React.ReactNode;
  navMain: React.ReactNode;
  navTimer: React.ReactNode;
}) {
  return (
    <>
      <NavBar>{navMain}</NavBar>
      {children}
    </>
  );
}
