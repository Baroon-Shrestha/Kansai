import React from "react";
import FaqImg from "../../assets/Images/img4.jpeg";
import HeroSection from "../HelperComponents/HeroSection";

export default function FAQHero() {
  return (
    <>
      <div className="max-h-[50vh]">
        <HeroSection
          title="Frequently Asked Questions"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            accusamus. Earum neque quisquam ducimus dolorum adipisci amet
            tempore quae labore."
          bgImage={FaqImg}
          current="FAQ"
        />
      </div>
    </>
  );
}
