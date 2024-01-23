import React from "react";
import Home from "./Home";
import Profile from "./components/Profile";
import Buttons from "./components/Buttons";
import Intro from "./components/Intro";

export default {
  title: "Sections/Home",
  Component: Home,
};

export const Component = (args: any) => <Home {...args} />;
export const ProfileComponent = (args: any) => <Profile {...args} />;
export const IntroComponent = (args: any) => <Intro {...args} />;
export const ButtonsComponent = (args: any) => <Buttons {...args} />;
