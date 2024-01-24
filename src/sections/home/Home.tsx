"use client";

import React from "react";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Buttons from "./components/Buttons";

function Home() {
  return (
    <section id="home" className="scroll-mt-28">
      <Profile />
      <Intro />
      <Buttons />
    </section>
  );
}

export default Home;
