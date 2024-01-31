import html5 from "@/assets/skill-icons/html5.png";
import css3 from "@/assets/skill-icons/css3.png";
import js from "@/assets/skill-icons/js.png";
import ts from "@/assets/skill-icons/ts.png";
import react from "@/assets/skill-icons/react.png";
import nextjs from "@/assets/skill-icons/nextjs.png";
import zustand from "@/assets/skill-icons/zustand.png";
import redux from "@/assets/skill-icons/redux.png";
import storybook from "@/assets/skill-icons/storybook.png";
import testingLibrary from "@/assets/skill-icons/testing-library.png";
import tailwind from "@/assets/skill-icons/tailwind.png";
import bootstrap from "@/assets/skill-icons/bootstrap5.png";
import sass from "@/assets/skill-icons/sass.png";
import firebase from "@/assets/skill-icons/firebase.png";
import figma from "@/assets/skill-icons/figma.png";
import git from "@/assets/skill-icons/git.png";
import vitest from "@/assets/skill-icons/vitest.png";
import JSXStyle from "styled-jsx/style";

const skills = [
  {
    title: "HTML",
    desc: "Hyper Text Markup Language",
    imgSrc: html5,
    value: 4.5,
  },
  {
    title: "CSS",
    desc: "Cascading Style Sheet",
    imgSrc: css3,
    value: 4.5,
  },
  {
    title: "JS",
    desc: "JavaScript",
    imgSrc: js,
    value: 3.5,
  },
  {
    title: "TS",
    desc: "TypeScript",
    imgSrc: ts,
    value: 3.5,
  },
  {
    title: "React",
    desc: "React 18",
    imgSrc: react,
    value: 4,
  },
  {
    title: "Next.js",
    desc: "Next.js 14",
    imgSrc: nextjs,
    value: 3.5,
  },
  {
    title: "Zustand",
    desc: "Zustand",
    imgSrc: zustand,
    value: 4,
  },
  {
    title: "Redux",
    desc: "Redux",
    imgSrc: redux,
    value: 3,
  },
  {
    title: "Storybook",
    desc: "Storybook",
    imgSrc: storybook,
    value: 4,
  },
  {
    title: "Testing Library",
    desc: "React Testing Library",
    imgSrc: testingLibrary,
    value: 3.5,
  },
  {
    title: "Vitest",
    desc: "Vitest",
    imgSrc: vitest,
    value: 4,
  },
  {
    title: "Git",
    desc: "Git",
    imgSrc: git,
    value: 4.5,
  },
  {
    title: "Tailwind",
    desc: "Tailwind CSS v3",
    imgSrc: tailwind,
    value: 4.5,
  },
  {
    title: "Bootstrap",
    desc: "Bootstrap v5",
    imgSrc: bootstrap,
    value: 4.5,
  },
  {
    title: "SASS",
    desc: "SASS",
    imgSrc: sass,
    value: 4,
  },
  {
    title: "Firebase",
    desc: "Firebase",
    imgSrc: firebase,
    value: 3.5,
  },
  {
    title: "Figma",
    desc: "Figma",
    imgSrc: figma,
    value: 3,
  },
] as const;
export default skills;
