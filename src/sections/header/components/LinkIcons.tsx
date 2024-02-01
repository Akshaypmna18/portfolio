import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Theme from "@/features/theme";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";

function LinkIcons({ className }: { className?: string }) {
  const iconsClass = "h-5 w-5 hover:text-primaryColor" as const;
  const { activeSection } = useActiveSectionContext();
  return (
    <div className={`mt-1 flex items-center flex-wrap gap-4 ${className}`}>
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
  );
}

export default LinkIcons;
