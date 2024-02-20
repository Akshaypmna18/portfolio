"use client";
import React, { useState } from "react";
import Image from "next/image";

function ProjectImage({ key, src }: { key: number; src: any }) {
  const [loaded, setLoaded] = useState<Boolean>(false);
  return (
    <Image
      key={key}
      src={src}
      alt={"sampleImage"}
      width={1300}
      height={800}
      onLoad={() => setLoaded(true)}
      quality={100}
      className={`cursor-pointer ${loaded ? "blur-none" : "blur-sm"}`}
    />
  );
}

export default ProjectImage;
