import links from "@/lib/navLinks";

export type SectionName = (typeof links)[number]["name"];
export type SectionHash = (typeof links)[number]["hash"];
export type LinksType = {
  hash: SectionHash;
  name: SectionName;
};
