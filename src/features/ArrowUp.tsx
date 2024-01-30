"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";

function ArrowUp() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <Button
      variant="secondary"
      className={`rounded-full p-0 w-8 h-8 fixed bottom-8 right-8 hover:text-primaryColor ${
        activeSection === "Home" ? "hidden" : ""
      }`}
    >
      <Link
        href="#home"
        onClick={() => {
          setActiveSection("Home");
          setTimeOfLastClick(Date.now());
        }}
      >
        <ArrowUpIcon />
      </Link>
    </Button>
  );
}

export default ArrowUp;
