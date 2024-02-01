import React from "react";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";
import { LinksType } from "@/lib/types";

function NavLinks({ hash, name }: LinksType) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <a
      href={hash}
      className={`${
        activeSection === name
          ? "font-semibold transition relative"
          : "hover:text-primaryColor "
      }`}
      onClick={() => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
      }}
    >
      {name}
      <span
        // layoutId="activeSection"
        className={`${
          activeSection === name
            ? "absolute bg-primaryColor h-[2px] left-0 right-0 -bottom-[2px] transition"
            : ""
        }`}
      ></span>
    </a>
  );
}

export default NavLinks;
