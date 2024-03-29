"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Rating from "@mui/material/Rating";

export const AnimatedTooltip = ({
  items,
}: {
  items: readonly {
    title: string;
    imgSrc: StaticImageData;
    value: number;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<StaticImageData | null>(
    null
  );
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <>
      {items.map(({ title, imgSrc, value }, idx) => (
        <motion.div
          key={idx}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={idx}
          viewport={{
            once: true,
          }}
          className="-mr-4  relative group"
          onMouseEnter={() => setHoveredIndex(imgSrc)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === imgSrc && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-secondary shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-foreground relative z-30 text-base">
                  {title}
                </div>
                <Rating
                  name="half-rating-read"
                  defaultValue={value}
                  precision={0.5}
                  readOnly
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={imgSrc}
            alt={title}
            className="object-fit m-4 !p-0 object-top h-14 w-14  group-hover:scale-105 group-hover:z-30   relative transition duration-500"
          />
        </motion.div>
      ))}
    </>
  );
};
