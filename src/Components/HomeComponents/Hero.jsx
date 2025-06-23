import React, { useState, useEffect } from "react";
import heroImg from "../../assets/nobghero.png";

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
    <div className="relative min-h-screen bg-[#FFF8F0] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 lg:py-12 gap-8 lg:gap-12">
          {/* Left Content */}
          <div
            className={`w-full lg:flex-1 max-w-2xl text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6 lg:space-y-8">
              {/* Animated Heading */}
              <div className="space-y-3 lg:space-y-4">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 transition-all duration-500 px-4 lg:px-0">
                  Begin your Japanese journey with
                </div>
                <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  <span className="bg-[#701919] text-transparent bg-clip-text">
                    Kansai International
                  </span>
                  <span className="block mt-2 bg-[#701919] text-transparent bg-clip-text">
                    Japanese Language Center
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                Embark on your journey to master Japanese with our comprehensive
                language programs. Experience authentic learning methods that
                connect you to Japan's rich culture and traditions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0 justify-center lg:justify-start">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#701919] to-[#D1863C] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                  <span className="relative z-10">Start Your Journey</span>
                </button>
                <button className="group bg-white/80 backdrop-blur-sm text-gray-800 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base">
                  <span className="group-hover:text-blue-600 transition-colors duration-300">
                    Learn More
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
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px]">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm flex items-center justify-center">
                  <img src={heroImg} alt="" className="object-cover" />
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">
                        ✓
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm sm:text-base">
                        Certified Programs
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
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
