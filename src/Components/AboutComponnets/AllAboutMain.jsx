import React from "react";
import AboutMain from "./AboutMain/AboutMain";
import Aims from "./AboutMain/Aims";
import Team from "./AboutMain/Team";
import Testimonials from "../AboutComponnets/AboutMain/Testimonials";
import WhyToChooseUs from "./AboutMain/WhyToChooseUs";
import Boost from "./AboutMain/Boost";
import WhoAreWe from "./AboutMain/WhoAreWe";
import FAQ from "./AboutMain/FAQ";
import ContactCTA from "./AboutMain/ContactCTA";

export default function AllAboutMain() {
  return (
    <div>
      <AboutMain />
      <WhoAreWe />
      {/* <Aims /> */}
      <Boost />
      <Team />
      <WhyToChooseUs />
      <Testimonials />

      <ContactCTA />
    </div>
  );
}
