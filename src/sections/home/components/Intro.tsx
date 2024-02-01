import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.h1
      className="max-w-[55%] mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Hello, I'm
      <span className="text-primaryColor font-bold"> Akshay K</span>. I'm a
      <span className="text-primaryColor font-bold"> front-end developer</span>.
      I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
      <span className="underline">React (Next.js)</span>.
    </motion.h1>
  );
}

export default Intro;
