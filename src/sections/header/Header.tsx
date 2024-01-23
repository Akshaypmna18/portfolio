"use client";

import React from "react";
import { motion } from "framer-motion";
import links from "@/constants/navLinks";
import Link from "next/link";

function Header() {
  return (
    <header className="relative z-10 md:flex justify-center">
      <motion.nav
        className="bg-red-500 w-full fixed md:top-4 md:rounded-full md:w-[min(50%,25rem)] shadow z-10 p-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap justify-evenly gap-3">
          {links.map((link) => (
            <motion.li
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header;
