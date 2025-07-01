import React from "react";
import AboutHero from "../../../assets/school.jpg";

export default function AboutMain() {
  return (
    <>
      <div className="relative">
        <img src={AboutHero} alt="" className="h-[30vh] w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-4xl font-extrabold text-white">About Kansai</p>
          <p className="text-lg font-extralight max-w-2xl text-white mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            accusamus. Earum neque quisquam ducimus dolorum adipisci amet
            tempore quae labore.
          </p>
        </div>
      </div>
    </>
  );
}
