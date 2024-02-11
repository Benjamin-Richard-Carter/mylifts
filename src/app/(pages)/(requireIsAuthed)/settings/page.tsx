"use client";
import { LayoutGroup } from "framer-motion";
import { NavBar } from "~/components/nav/navBar";
import { Settings } from "~/components/nav/states/settings";
import Accordion from "~/components/ui/Accordion";
import updateTheme from "~/server/actions/updateTheme";

export default function SettingsPage() {
  return (
    <>
      <NavBar>
        <Settings />
      </NavBar>

      <div className="container flex flex-col gap-3 px-4 pt-5 sm:px-0">
        <LayoutGroup>
          <Accordion title="Profile">
            <div className="p-4">Content</div>
          </Accordion>

          <Accordion title="User Interface">
            <div className="flex flex-col p-4">
              <button onClick={() => updateTheme("default")}>Default</button>
              <button onClick={() => updateTheme("dark")}>Dark</button>
              <button onClick={() => updateTheme("light")}>Monochrome</button>
            </div>
          </Accordion>

          <Accordion title="Preferences">
            <div className="p-4">Content</div>
          </Accordion>
        </LayoutGroup>
      </div>
    </>
  );
}
