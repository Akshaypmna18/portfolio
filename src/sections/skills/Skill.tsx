"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import skills from "@/lib/skillsdata";
import { motion } from "framer-motion";

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

function Skill() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(({ title, desc, imgSrc }, index) => {
        return (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <Button asChild variant="outline">
                <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {title}
                </motion.li>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="min-w-40">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={imgSrc} alt={`${title}-logo`} />
                  <AvatarFallback>Logo</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  {/* <h4 className="text-sm font-semibold">{title}</h4> */}
                  <p className="text-sm">{desc}</p>
                  {/* <Button variant="link" className="p-0" asChild>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                      target="_blank"
                    >
                      More details
                    </a>
                  </Button> */}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}

export default Skill;
