import React from "react";
import FaqImg from "../../assets/Images/img4.jpeg";
import HeroSection from "../HelperComponents/HeroSection";

export default function FAQHero() {
  return (
    <>
      <div className="max-h-[50vh]">
        <HeroSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common queries about our services, training programs, and the process of studying or working in Japan."
          bgImage={FaqImg}
          current="FAQ"
        />
      </div>
    </>
  );
}
