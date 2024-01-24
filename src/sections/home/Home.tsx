"use client";

import React from "react";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Buttons from "./components/Buttons";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";

function Home() {
  const ref = useIsVisible("Home");
  return (
    <section ref={ref} id="home" className="pt-[5rem]">
      <Profile />
      <Intro />
      <Buttons />
    </section>
  );
}

export default Home;
