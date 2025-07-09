import React from "react";
import ServiceImg from "../../assets/school.jpg";
import HeroSection from "../HelperComponents/HeroSection";

export default function ServicesHero() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Explore our comprehensive support for language training, career guidance, and study opportunities in Japan."
        bgImage={ServiceImg}
        current="Services"
      />
    </>
  );
}
