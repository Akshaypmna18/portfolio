"use client";

import NavBar from "./components/NavBar";
import { motion, MotionValue } from "framer-motion";
import LinkIcons from "./components/LinkIcons";
import SheetShadcn from "./components/SheetShadcn";

type Props = {
  scrollYProgress: MotionValue<number>;
};

function Header({ scrollYProgress }: Props) {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-background sm:bg-transparent backdrop-blur-md p-4 xl:max-w-[60rem] mx-auto">
      <div className="flex gap-1 items-center">
        <svg id="progress" width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
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
        <LinkIcons className="hidden md:flex" />
      </>
    </header>
  );
}

export default Header;
