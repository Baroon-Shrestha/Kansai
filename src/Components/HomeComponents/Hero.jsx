import React, { useState, useEffect } from "react";
import { ArrowRight, Info, Check } from "lucide-react";
import heroImg from "../../assets/nobghero.png";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textVariations = [
    "Take your first step towards Japan with",
    "Begin your Japanese journey with",
    "Start your adventure in Japan with",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textVariations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:pt-10 min-h-screen  bg-[#FFF8F0] overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 lg:py-12 gap-8 lg:gap-16">
          {/* Left Content */}
          <div
            className={`w-full lg:flex-1 max-w-3xl text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-8 lg:space-y-10">
              {/* Animated Heading */}
              <div className="space-y-4 lg:space-y-6">
                <div className="text-base sm:text-lg lg:text-xl font-extralight text-gray-700 px-4 lg:px-0 transition-all duration-500">
                  <Typewriter
                    options={{
                      strings: textVariations,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <h1 className="font-black text-2xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#701919] leading-tight">
                  <span className="bg-gradient-to-r from-[#701919] to-[#8B2635] text-transparent bg-clip-text">
                    Kansai Int'l{" "}
                  </span>
                  <span className=" font-bold text-[#D1863C]">
                    Language Center
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-md sm:text-xl lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 font-extralight">
                Embark on your journey to master Japanese with our comprehensive
                language programs. Experience authentic learning methods that
                connect you to Japan's rich culture and traditions.
              </p>

              {/* Stats or Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 px-4 lg:px-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#701919]">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#701919]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#701919]">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0 justify-center lg:justify-start">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#701919] to-[#D1863C] text-white font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-base sm:text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Journey
                    <ArrowRight />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#E6974A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group bg-white/90 backdrop-blur-sm text-gray-800 font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-2xl border-2 border-[#701919]/20 hover:border-[#701919]/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-base sm:text-lg">
                  <span className="group-hover:text-[#701919] transition-colors duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <Info />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`w-full lg:flex-1 flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[480px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px]">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl border-4 border-white/60 backdrop-blur-sm flex items-center justify-center overflow-hidden ">
                  <img
                    src={heroImg}
                    alt="Kansai International Language Center"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs ">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full flex items-center justify-center shadow-lg">
                      <Check className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-base sm:text-lg">
                        Certified Programs
                      </div>
                      <div className="text-sm sm:text-base text-gray-600">
                        JLPT preparation included
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
