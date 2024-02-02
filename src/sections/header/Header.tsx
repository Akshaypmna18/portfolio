"use client";

import NavBar from "./components/NavBar";
import { useScroll, useTransform, motion } from "framer-motion";
import LinkIcons from "./components/LinkIcons";
import SheetShadcn from "./components/SheetShadcn";

function Header() {
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-background p-4 xl:max-w-[80%] mx-auto">
      <div className="flex gap-2 items-center">
        {/* <motion.span style={{ scale }}>hello</motion.span> */}
        <motion.h2
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-foreground font-bold text-2xl"
        >
          Akshay K
        </motion.h2>
      </div>
      <SheetShadcn />
      <>
        <NavBar />
        <LinkIcons className="hidden sm:flex" />
      </>
    </header>
  );
}

export default Header;
