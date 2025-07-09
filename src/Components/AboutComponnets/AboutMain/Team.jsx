import React from "react";
import Carousel from "../../HelperComponents/Carousel";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <>
      <div>
        <div className="container mx-auto pt-10 space-y-10">
          <div className="mb-4 text-center">
            <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
              Our Team
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl font-extrabold text-center text-[#701919]">
              Meet Our Team
            </div>
            <p className="font-extralight text-xl text-center max-w-3xl">
              At Kansai International Language Center, our dedicated team is
              passionate about helping students achieve their goals in Japan.
              With expert guidance, personalized support, and deep cultural
              knowledge, we are committed to making your journey smooth and
              successful
            </p>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}
