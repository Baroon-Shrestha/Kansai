import React from "react";
import ServiceImg from "../../assets/school.jpg";
import HeroSection from "../HelperComponents/HeroSection";

export default function ServicesHero() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            accusamus. Earum neque quisquam ducimus dolorum adipisci amet
            tempore quae labore."
        bgImage={ServiceImg}
        current="Services"
      />
    </>
  );
}
