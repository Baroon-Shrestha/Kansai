import React from "react";
import AboutMain from "./AboutMain/AboutMain";
import Aims from "./AboutMain/Aims";

import Testimonials from "../AboutComponnets/AboutMain/Testimonials";
import WhyToChooseUs from "./AboutMain/WhyToChooseUs";
import Boost from "./AboutMain/Boost";
import WhoAreWe from "./AboutMain/WhoAreWe";
import FAQ from "./AboutMain/FAQ";
import ContactCTA from "./AboutMain/ContactCTA";
import Team from "../HomeComponents/Team";

export default function AllAboutMain() {
  return (
    <div>
      <AboutMain />
      <WhoAreWe />
      {/* <Aims /> */}
      <Boost />
      <Team />
      <div className="bg-[#FFF8F0] mx-6">
        <WhyToChooseUs />
      </div>
      <Testimonials />

      <ContactCTA />
    </div>
  );
}
