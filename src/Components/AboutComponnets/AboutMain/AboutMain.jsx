import React from "react";
import AboutHero from "../../../assets/school.jpg";
import HeroSection from "../../HelperComponents/HeroSection";

export default function AboutMain() {
  return (
    <>
      <HeroSection
        title="About Kansai"
        subtitle="At Kansai, we empower individuals with quality training and global career guidance. Our experienced team offers personalized support to help you make informed decisions and succeed overseas."
        bgImage={AboutHero}
        current="About"
      />
    </>
  );
}
