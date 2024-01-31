import Skills from "@/sections/skills";
import React from "react";
import Projects from "@/sections/projects";
import Header from "@/sections/header";
import Home from "@/sections/home";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import ArrowUp from "@/features/ArrowUp";
import "./style.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-[50rem] mx-auto pt-[5rem] gap-y-[10rem] py-4 text-center">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ArrowUp />
    </>
  );
}
