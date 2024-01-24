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
import { resumeLink } from "@/lib/urls";

function Buttons() {
  return (
    <motion.div
      className="space-x-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Button
        asChild
        className="rounded-full md:hover:text-primaryColor md:focus:text-primaryColor "
      >
        <Link href="#contact">
          Contact me here
          <ArrowRightIcon className="ml-1" />
        </Link>
      </Button>

      <Button
        variant="secondary"
        asChild
        className="rounded-full md:hover:text-primaryColor md:focus:text-primaryColor "
      >
        <a href={resumeLink} download>
          Resume <FileTextIcon className="ml-1" />
        </a>
      </Button>

      <Button
        variant="secondary"
        asChild
        className="rounded-full md:hover:text-primaryColor md:focus:text-primaryColor "
      >
        <a href="https://www.linkedin.com/in/akshaypmna" target="_blank">
          <LinkedInLogoIcon />
        </a>
      </Button>

      <Button
        variant="secondary"
        asChild
        className="rounded-full md:hover:text-primaryColor md:focus:text-primaryColor "
      >
        <a href="https://github.com/Akshaypmna18" target="_blank">
          <GitHubLogoIcon />
        </a>
      </Button>
    </motion.div>
  );
}

export default Buttons;
