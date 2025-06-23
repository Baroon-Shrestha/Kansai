import React from "react";
import Hero from "../Components/Home components/Hero";
import Introduction from "../Components/Home components/Introduction";
import Visitus from "../Components/Home components/Visitus";
import Team from "../Components/Home components/Team";
import WhytoChooseUs from "../Components/Home components/WhytoChooseUs";
import Services from "../Components/Home components/Services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Services />
      <WhytoChooseUs />
      <Team />
      <Visitus />
    </div>
  );
}
