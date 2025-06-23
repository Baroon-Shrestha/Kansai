import React from "react";
import WhyChooseUSGrid from "../Helper componnets/WhyChooseUSGrid";

export default function WhytoChooseUs() {
  return (
    <>
      <div className="bg-[#FFF8F0] py-20">
        <div className="container mx-auto">
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
            Why Choose Us
          </div>
          <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
          <div className="flex items-center flex-col gap-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#701919]">
              Why Kansai is the best for you?
            </div>
            <div className="text-base sm:text-lg md:text-lg text-center font-extralight max-w-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              molestias possimus labore corporis necessitatibus iusto quidem
              nemo accusantium, consequatur vero!
            </div>
          </div>
          <WhyChooseUSGrid />
        </div>
      </div>
    </>
  );
}
