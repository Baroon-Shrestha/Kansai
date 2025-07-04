import React, { useState, useEffect } from "react";
import { ArrowRight, Info } from "lucide-react";
import img1 from "../../assets/Images/img1.jpeg";
import img2 from "../../assets/Images/img2.jpeg";
import RotatingText from "../HelperComponents/RotatingText";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const textVariations = [
    "Take your first step towards Japan with",
    "Begin your Japanese journey with",
    "Start your adventure in Japan with",
  ];

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeText = () => {
      const currentString = textVariations[currentText];
      if (currentIndex < currentString.length) {
        setAnimatedText(currentString.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, 50);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentText((prev) => (prev + 1) % textVariations.length);
            currentIndex = 0;
            setAnimatedText("");
            setIsTyping(true);
            typeText();
          }, 2000);
        }, 1500);
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, [currentText]);

  return (
    <div className="relative bg-gradient-to-br from-[#FFF8F0] via-[#FDF6ED] to-[#FAF4E8] mx-6 pt-10 rounded-b-4xl overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center py-20 lg:min-h-screen gap-12">
          {/* Left Image */}
          <div className="hidden lg:block">
            <div className="w-52 h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src={img1}
                alt="Left Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center flex-1 px-4 sm:px-10">
            {/* <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 min-h-[28px] mb-4">
              {animatedText}
              <span
                className={`inline-block w-0.5 h-6 bg-[#701919] ml-1 ${
                  isTyping ? "animate-pulse" : "opacity-0"
                }`}
              ></span>
            </div> */}
            <RotatingText
              texts={[
                "Step into Japan with us",
                "Begin your journey to Japan",
                "Start your Japan adventure",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#701919] to-[#D1863C] text-white shadow-lg font-extrabold text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />

            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 cursor-default">
              <span className="bg-gradient-to-r from-[#701919] via-[#8B2635] to-[#701919] text-transparent bg-clip-text drop-shadow-sm">
                Kansai Int&apos;l{" "}
              </span>
              <span className="font-semibold text-[#D1863C] drop-shadow-sm">
                Language Center
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light mt-6">
              Experience authentic Japanese learning with our comprehensive
              programs that connect you to Japan's rich culture and traditions.
            </p>

            <div className="flex justify-center gap-6 lg:gap-12 mt-10">
              {[
                { label: "Students", value: "500+" },
                { label: "Years", value: "15+" },
                { label: "Success", value: "95%" },
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="relative">
                    <div className="text-3xl lg:text-4xl font-bold text-[#701919] group-hover:scale-110 transition-transform duration-300">
                      {item.value}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#701919] to-[#D1863C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-10">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#701919] via-[#8B2635] to-[#701919] text-white font-semibold py-4 px-8 sm:py-4 sm:px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-base sm:text-lg">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button className="group bg-white/95 backdrop-blur-md text-gray-800 font-semibold py-4 px-8 sm:py-4 sm:px-10 rounded-2xl border-2 border-[#701919]/30 hover:border-[#701919]/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-base sm:text-lg">
                <span className="group-hover:text-[#701919] transition-colors duration-300 flex items-center justify-center gap-3">
                  Learn More
                  <Info className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="w-52 h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src={img2}
                alt="Right Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
