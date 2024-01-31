import React from "react";

type Props = {
  children: React.ReactNode;
};

function SectionHeading({ children }: Props) {
  return <h2 className="capitalize text-3xl font-bold mb-8">{children}</h2>;
}

export default SectionHeading;
