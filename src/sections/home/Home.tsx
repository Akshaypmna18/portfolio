"use client";

import React from "react";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Buttons from "./components/Buttons";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import ScrollDown from "./components/ScrollDown";

function Home() {
  const ref = useIsVisible("Home", 0.5);
  return (
    <section ref={ref} id="home" className="space-y-4 scroll-mt-32">
      <Profile />
      <Intro />
      <Buttons />
      <ScrollDown />
    </section>
  );
}

export default Home;
