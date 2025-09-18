"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import links from "@/lib/navLinks";
import NavLinks from "./NavLinks";
import { LinksType } from "@/lib/types";

function NavBar() {
  return (
    <motion.nav
      className="bg-secondary rounded-full hidden w-[min(50%,28rem)] lg:block shadow z-10 p-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <ul className="flex flex-wrap justify-evenly gap-3">
        {links.map(({ hash, name }: LinksType) => (
          <motion.li
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={hash}
            className="relative"
          >
            <NavLinks hash={hash} name={name} />
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default NavBar;
