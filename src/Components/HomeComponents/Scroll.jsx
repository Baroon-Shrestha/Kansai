import React from "react";
import ScrollVelocity from "../HelperComponents/ScrollVelocity";

export default function Scroll() {
  return (
    <>
      <div className="container mx-auto my-8">
        <ScrollVelocity
          texts={["Kansai Int'l Langauge Center", "Join Us Now"]}
          velocity={100}
          className="custom-scroll-text bg-gradient-to-br from-[#701919] via-[#8B2635] to-[#D1863C] text-transparent bg-clip-text"
        />
      </div>
    </>
  );
}
