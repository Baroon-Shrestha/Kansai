import React from "react";
import Carousel from "../HelperComponents/carousel";

export default function Team() {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
          Our Team
        </div>
        <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
        <div className="flex items-center flex-col gap-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#701919]">
            Meet Our Team
          </div>
          <div className="text-base sm:text-xl md:text-xl font-extralight max-w-3xl text-center">
            Professionals dedicated to delivering exceptional experiences. Each
            member brings unique expertise and creativity to make our vision a
            reality.
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
}
