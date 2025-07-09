import React, { useState, useEffect, useRef } from "react";
import school from "../../../assets/school.jpg";
import CircularText from "../../HelperComponents/CircularText";

export default function WhoAreWe() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const tabs = [
    { title: "Our Aims", icon: "🎯" },
    { title: "Our Objective", icon: "📚" },
    { title: "Our Success", icon: "🏆" },
  ];

  const tabContent = [
    {
      title: "Our Aim",
      content:
        "At Kansai, our aim is to become a trusted gateway for individuals seeking education, training, and employment in Japan. We are committed to delivering quality services that prepare clients for global success while maintaining integrity, professionalism, and client satisfaction at every step.",
    },
    {
      title: "Our Objective",
      content:
        "At Kansai, our objective is to empower individuals for successful careers in Japan through expert guidance, language training, and cultural preparation. We ensure ethical, transparent support in visa processing and documentation, while building strong partnerships with Japanese institutions to create meaningful opportunities for our clients",
    },
    {
      title: "Proven Track Record",
      content:
        "With over 9 years of excellence in Japanese language education, we have successfully guided thousands of students toward their goals. Our graduates excel in JLPT examinations, university admissions, and professional careers across Japan and internationally.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-60"></div>
      </div>

      <div
        className={`container mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Who Are We?
          </span>
        </div>

        {/* Section Title */}
        <div
          className={`text-center mb-4 transition-all duration-1000 delay-[100ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-[#701919] text-transparent bg-clip-text">
              Who Are We?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#701919] to-[#D1863C] mx-auto rounded-full"></div>
        </div>

        {/* Description Paragraph */}
        <div
          className={`flex items-center justify-center mb-16 transition-all duration-1000 delay-[200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="max-w-4xl text-center text-lg font-extralight">
            <b className="font-bolder"> Kansai International Language Center</b>{" "}
            is committed to guiding individuals toward educational and career
            opportunities in Japan. With a focus on integrity, personalized
            support, and cultural understanding, we bridge the gap between
            ambition and achievement.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Tabs + Content + Features */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-[300ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-lg">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#701919] to-[#D1863C] text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline text-sm">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="text-3xl">{tabs[activeTab].icon}</span>
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 transition-all duration-1000 delay-[400ms]">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-bold text-blue-800">Flexible Schedule</div>
                <div className="text-sm text-blue-600">
                  Morning & Evening Classes
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-bold text-purple-800">Small Classes</div>
                <div className="text-sm text-purple-600">Max 15 Students</div>
              </div>
            </div>
          </div>

          {/* Right Side: Image + Stats */}
          <div
            className={`transition-all duration-1000 delay-[500ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Image Box */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center bg-gradient-to-r from-[#701919] to-[#D1863C]">
                  <img
                    src={school}
                    alt="Classroom"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 sm:p-8 text-white">
                    <p className="text-sm opacity-90">
                      Trusted by 1000+ international students
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Cards */}
              <div className="absolute -top-4 sm:-top-6 right-4 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 transition-all duration-1000 delay-[600ms]">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    90
                  </div>
                  <div className="text-xs text-gray-600">Pass Rate</div>
                </div>

                {/* <CircularText
                  text="REACT*BITS*COMPONENTS*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                /> */}
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 transition-all duration-1000 delay-[700ms]">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    9+
                  </div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
