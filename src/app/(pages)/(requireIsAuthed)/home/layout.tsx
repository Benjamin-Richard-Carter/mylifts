"use client";
import { NavBar } from "~/components/nav/navBar";

export default function Layout({
  children,
  main,
  profile,
}: {
  children: React.ReactNode;
  main: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <>
      <NavBar>{main}</NavBar>
      {children}
    </>
  );
}
