"use client";

import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";

function Contact() {
  const ref = useIsVisible("Contact");
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, stiffness: 250 }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="scroll-mt-28 space-y-4"
      ref={ref}
    >
      <h2 className="section-heading">Contact</h2>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:akshaypmna18@gmail.com">
          akshaypmna18@gmail.com
        </a>{" "}
        or through this form
      </p>
      <ContactForm />
    </motion.section>
  );
}

export default Contact;
