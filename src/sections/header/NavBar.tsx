"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import links from "@/lib/navLinks";
import Link from "next/link";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";

function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.nav
      className="bg-secondary md:rounded-full md:w-[min(50%,25rem)] shadow z-10 p-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <ul className="flex flex-wrap justify-evenly gap-3">
        {links.map((link) => (
          <motion.li
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={link.hash}
            className="relative"
          >
            <Link
              href={link.hash}
              className={`${
                activeSection === link.name
                  ? "font-semibold transition"
                  : "hover:text-primaryColor"
              }`}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
              <motion.span
                // layoutId="activeSection"
                className={`${
                  activeSection === link.name
                    ? "absolute bg-primaryColor h-[2px] left-0 right-0 bottom-0 transition"
                    : ""
                }`}
              ></motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default NavBar;
