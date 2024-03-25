import links from "@/lib/navLinks";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];
export type SectionHash = (typeof links)[number]["hash"];
export type LinksType = {
  hash: SectionHash;
  name: SectionName;
};

export type ProjectData = {
  category?: "Interactive" | "Designs" | "UI/UX" | "Mobile App";
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData | string;
  demoLink: string;
  codeLink?: string;
};
