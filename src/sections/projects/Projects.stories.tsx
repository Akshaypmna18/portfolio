import React from "react";
import Projects from "./Projects";
import Project from "./Project";

export default {
  title: "Sections/Projects",
  Component: Projects,
};

export const Component = (args: any) => <Projects {...args} />;

export const ProjectComponent = (args: any) => <Project {...args} />;
