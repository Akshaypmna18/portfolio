import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.h1
      className="max-w-[75%] mx-auto text-[calc(1.25rem+1vw)] lg:text-[1.75rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Hello, I'm
      <span className="text-primaryColor font-bold"> Akshay K</span>. I'm a{" "}
      <span className="text-primaryColor font-bold">
        frontend-focused full-stack developer
      </span>
      . I enjoy building <span className="italic">web apps</span>. My current
      focus is <span className="underline">AI agents</span>.
    </motion.h1>
  );
}

export default Intro;
