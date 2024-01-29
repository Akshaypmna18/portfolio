import React from "react";
import Skills from "./Skills";
import Skill from "./Skill";

export default {
  title: "Sections/Skills",
  Component: Skills,
};

export const Component = (args: any) => <Skills {...args} />;

export const SkillComponent = (args: any) => <Skill {...args} />;
