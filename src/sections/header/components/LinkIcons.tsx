import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Theme from "@/features/theme";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";
import { motion } from "framer-motion";

function LinkIcons({ className }: { className?: string }) {
  const iconsClass =
    "h-[calc(1.25rem+1vw)] sm:h-[1.2rem] sm:w-[1.2rem] w-[calc(1.25rem+1vw)] hover:text-primaryColor" as const;
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className={`mt-1 flex items-center flex-wrap gap-4 ${className}`}
    >
      <div
        className={`flex items-center flex-wrap gap-4 -mr-2 sm:-mr-[0.65rem] ${
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
      <Theme className={iconsClass} />
    </motion.div>
  );
}

export default LinkIcons;
