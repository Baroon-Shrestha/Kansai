import React from "react";
import WhyChooseUSGrid from "../HelperComponents/WhyChooseUSGrid";
import WhyChooseUs from "../AboutComponnets/AboutMain/WhyToChooseUs";

export default function WhytoChooseUs() {
  return (
    <>
      {/* <div className="bg-[#FF8F0] py-20">
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
              At Kansai, we do more than teach Japanese — we guide you through a
              life-changing journey toward your dream career in Japan. From
              language mastery to cultural fluency and visa support, our
              commitment is complete.
            </div>
          </div>
          <WhyChooseUSGrid />
        </div>
      </div> */}
      <WhyChooseUs />
    </>
  );
}
