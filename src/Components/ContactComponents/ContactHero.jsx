import React from "react";
import HeroSection from "../HelperComponents/HeroSection";
import img1 from "../../assets/Images/img2.jpeg";
export default function ContactHero() {
  return (
    <div>
      <HeroSection
        title="Get In Touch"
        subtitle="Ready to start a conversation? We'd love to hear from you. Reach out and let's create something amazing together."
        bgImage={img1}
        current="Contact"
      />
    </div>
  );
}
