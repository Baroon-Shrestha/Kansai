import React from "react";
import ServicesGrid from "../Helper components/ServicesGrid";

export default function Services() {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto">
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
            Services
          </div>
          <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
          <div className="flex items-center flex-col gap-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#701919]">
              Our services
            </div>
            <div className="text-base sm:text-lg font-extralight max-w-3xl text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              voluptatibus temporibus rerum vitae ipsam delectus consequatur
              laboriosam recusandae maiores quas!
            </div>
          </div>
        </div>
        <ServicesGrid />
      </div>
    </>
  );
}
