import React from "react";
import WhyChooseUSGrid from "../HelperComponents/WhyChooseUSGrid";

export default function WhytoChooseUs() {
  return (
    <>
      <div className="bg-[#FF8F0] py-20">
        <div className="container mx-auto">
          <div className="mb-4 text-center">
            <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
              Why Choose Us?
            </span>
          </div>
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
