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
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, stiffness: 250 }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="experience"
      className="scroll-mt-36"
      ref={ref}
    >
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
              <a
                className="!mt-0 text-sm italic hover:text-primaryColor hover:underline"
                href={item.company_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.location}
              </a>
              <p className="!mt-1 text-muted-foreground">{item.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}

export default Experience;
