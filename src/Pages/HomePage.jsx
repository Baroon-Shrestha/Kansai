import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import Introduction from "../Components/HomeComponents/Introduction";
import Visitus from "../Components/HomeComponents/Visitus";
import Team from "../Components/HomeComponents/Team";
import WhytoChooseUs from "../Components/HomeComponents/WhytoChooseUs";
import Services from "../Components/HomeComponents/Services";

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
