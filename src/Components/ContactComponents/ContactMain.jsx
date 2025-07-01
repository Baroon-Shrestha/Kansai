import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import Visit from "./Visit";

export default function ContactMain() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Visit />
    </div>
  );
}
