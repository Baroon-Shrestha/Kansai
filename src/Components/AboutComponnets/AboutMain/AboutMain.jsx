import React from "react";
import AboutHero from "../../../assets/school.jpg";
import HeroSection from "../../HelperComponents/HeroSection";

export default function AboutMain() {
  return (
    <>
      <HeroSection
        title="About Kansai"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            accusamus. Earum neque quisquam ducimus dolorum adipisci amet
            tempore quae labore."
        bgImage={AboutHero}
        current="About"
      />
    </>
  );
}
