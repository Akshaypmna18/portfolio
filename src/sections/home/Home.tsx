"use client";

import React from "react";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Buttons from "./components/Buttons";

function Home() {
  return (
    <section>
      <Profile />
      <Intro />
      <Buttons />
    </section>
  );
}

export default Home;
