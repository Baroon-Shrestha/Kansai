import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import Introduction from "../Components/HomeComponents/Introduction";
import Visitus from "../Components/HomeComponents/Visitus";
import Team from "../Components/HomeComponents/Team";
import WhytoChooseUs from "../Components/HomeComponents/WhytoChooseUs";
import Services from "../Components/HomeComponents/Services";
import Services2 from "../Components/HomeComponents/Services2";
import Intro from "../Components/HomeComponents/Intro";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Intro />
      {/* <Services /> */}
      <Services2 />
      <WhytoChooseUs />
      <Team />
      <Visitus />
    </div>
  );
}
