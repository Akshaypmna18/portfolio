import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  FileTextIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";

function Buttons() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const buttonClassName =
    "hover:animate-shimmer hover:bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] transition-colors rounded-full  ";
  return (
    <motion.div
      className="flex flex-wrap gap-2 justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Button
        asChild
        className="rounded-full md:hover:text-primaryColor hover:bg-foreground md:focus:text-primaryColor "
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <ArrowRightIcon className="ml-1" />
        </Link>
      </Button>

      <Button variant="secondary" asChild className={buttonClassName}>
        <a
          href="https://docs.google.com/viewer?url=https://github.com/Akshaypmna18/portfolio/raw/master/src/assets/Akshay-K%C2%B7Front-End-Dev.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume <FileTextIcon className="ml-1" />
        </a>
      </Button>

      <Button variant="secondary" asChild className={buttonClassName}>
        <a href="https://www.linkedin.com/in/akshaypmna" target="_blank">
          <LinkedInLogoIcon />
        </a>
      </Button>

      <Button variant="secondary" asChild className={buttonClassName}>
        <a href="https://github.com/Akshaypmna18" target="_blank">
          <GitHubLogoIcon />
        </a>
      </Button>
    </motion.div>
  );
}

export default Buttons;
