"use client";
import { NavBar } from "~/components/nav/navBar";
import { Home } from "~/components/nav/states/home";

export default function HomePage() {
  return (
    <>
      <NavBar>
        <Home />
      </NavBar>
    </>
  );
}
