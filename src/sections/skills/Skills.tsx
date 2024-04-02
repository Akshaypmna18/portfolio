"use client";

import Skill from "./Skill";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import { motion } from "framer-motion";
import Image from "next/image";
import shape from "@/assets/blurry-shape-1.svg";

function Skills() {
  const ref = useIsVisible("Skills");
  return (
    <motion.section
      id="skills"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      ref={ref}
      className="scroll-mt-28"
    >
      <h2 className="section-heading">Skills</h2>
      <div className="relative">
        <Image
          src={shape}
          alt=""
          className=" absolute -z-0 min-[470px]:top-[3rem] min-[570px]:top-0 min-[570px]:pl-16 sm:top-[-6rem] md:top-[-8rem]"
        />
        <Image
          src={shape}
          alt=""
          className="absolute top-[11rem] -z-0 min-[470px]:hidden"
        />
        <Image
          src={shape}
          alt=""
          className="absolute top-[20rem] -z-0 min-[400px]:hidden"
        />
        <Image
          src={shape}
          alt=""
          className="absolute top-[30rem] -z-0 min-[320px]:hidden"
        />
      </div>
      <Skill />
    </motion.section>
  );
}

export default Skills;
