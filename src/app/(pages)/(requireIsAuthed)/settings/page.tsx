"use client";
import { LayoutGroup } from "framer-motion";
import { NavBar } from "~/components/nav/navBar";
import { Settings } from "~/components/nav/states/settings";
import Accordion from "~/components/ui/Accordion";

export default function HomePage() {
  return (
    <>
      <NavBar>
        <Settings />
      </NavBar>

      <div className="container flex flex-col gap-3 px-4 pt-5 sm:px-0">
        <LayoutGroup>
          <Accordion rounded={5} title="Profile">
            <div className="p-4">Content</div>
          </Accordion>

          <Accordion rounded={5} title="User Interface">
            <div className="p-4">Content</div>
          </Accordion>

          <Accordion rounded={5} title="Preferences">
            <div className="p-4">Content</div>
          </Accordion>
        </LayoutGroup>
      </div>
    </>
  );
}
