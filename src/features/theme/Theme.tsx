"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Theme({ className }: { className?: string }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      className="bg-transparent border-0 hover:border hover:text-primaryColor"
      size="icon"
      onClick={() => {
        setTheme(isDarkMode ? "light" : "dark");
      }}
    >
      <SunIcon
        className={` rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${className}`}
      />
      <MoonIcon
        className={`absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${className}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
