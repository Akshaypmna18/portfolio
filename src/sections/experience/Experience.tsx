"use client";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import { experiencesData } from "@/lib/experience-data";

function Experience() {
  const ref = useIsVisible("Experience");
  const { resolvedTheme } = useTheme();
  return (
    <section id="experience" className="scroll-mt-36" ref={ref}>
      <h2 className="section-heading">Experience</h2>
      <VerticalTimeline
        lineColor={
          resolvedTheme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"
        }
      >
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  resolvedTheme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  resolvedTheme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  resolvedTheme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-medium capitalize text-base">{item.title}</h3>
              <p className="font-normal !mt-0 text-sm italic">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal ">{item.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
