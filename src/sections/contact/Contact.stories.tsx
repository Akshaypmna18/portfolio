import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

export default {
  title: "Sections/Contact",
  Component: Contact,
};

export const Component = (args: any) => <Contact {...args} />;

export const ContactFormComponent = (args: any) => <ContactForm {...args} />;
