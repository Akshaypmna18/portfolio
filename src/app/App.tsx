"use client";

import Skills from "@/sections/skills";
import React, { useRef } from "react";
import Projects from "@/sections/projects";
import Header from "@/sections/header";
import Home from "@/sections/home";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import TextRevealCard from "@/sections/textRevealCard";
import ArrowUp from "@/features/ArrowUp";
import "./style.css";
import { useScroll } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <>
      <Header scrollYProgress={scrollYProgress} />
      <main
        ref={ref}
        className="flex flex-col max-w-[50rem] mx-auto pt-[5rem] gap-y-[10rem] px-4 text-center"
      >
        <Home />
        <About />
        <Skills />
        <Projects />
        <TextRevealCard />
        <Contact />
        <BackgroundBeams />
      </main>
      <Footer />
      <ArrowUp />
    </>
  );
}
