"use client";

import Theme from "@/features/theme";
import NavBar from "./NavBar";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";
import { useScroll, useTransform, motion } from "framer-motion";

function Header() {
  const iconsClass = "h-5 w-5 hover:text-primaryColor" as const;
  const { activeSection } = useActiveSectionContext();
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <header className="sticky top-0 z-10 md:flex justify-between items-center backdrop-blur-lg p-4">
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
      <NavBar />
      <div className="mt-1 flex items-center flex-wrap gap-4">
        <div
          className={`flex items-center flex-wrap gap-4 -mr-2 ${
            activeSection === "Home" ? "hidden" : ""
          }`}
        >
          <a href="https://github.com/Akshaypmna18" target="_blank">
            <GitHubLogoIcon className={iconsClass} />
          </a>
          <a href="https://www.linkedin.com/in/akshaypmna" target="_blank">
            <LinkedInLogoIcon className={iconsClass} />
          </a>
        </div>
        <Theme />
      </div>
    </header>
  );
}

export default Header;
