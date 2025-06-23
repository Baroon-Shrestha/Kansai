import React, { useState, useEffect, useRef } from "react";
import school from "../../assets/school.jpg";

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const tabs = [
    { title: "Our Mission", icon: "🎯" },
    { title: "Our Approach", icon: "📚" },
    { title: "Our Success", icon: "🏆" },
  ];

  const tabContent = [
    {
      title: "Empowering Global Communication",
      content:
        "At Kansai International Japanese Language Center, we believe language is the bridge to understanding. Our mission is to provide comprehensive, culturally-rich Japanese language education that empowers students to connect authentically with Japanese society, business, and culture.",
    },
    {
      title: "Immersive Learning Experience",
      content:
        "Our innovative teaching methodology combines traditional Japanese pedagogical approaches with modern interactive techniques. We focus on practical communication skills, cultural immersion, and real-world application to ensure our students develop both linguistic competence and cultural fluency.",
    },
    {
      title: "Proven Track Record",
      content:
        "With over 15 years of excellence in Japanese language education, we have successfully guided thousands of students toward their goals. Our graduates excel in JLPT examinations, university admissions, and professional careers across Japan and internationally.",
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
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
          About Us
        </div>
        <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-black mb-6">
            <span className="bg-[#701919]  text-transparent bg-clip-text">
              Kansai International
            </span>
            <span className="block mt-2 bg-[#701919] text-transparent bg-clip-text">
              Japanese Language Center
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#701919] to-[#D1863C] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Interactive Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
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

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
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

          {/* Right Side - Visual Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-r from-[#701919] to-[#D1863C]">
                  <img src={school} alt="" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {/* <span className="text-yellow-400">⭐</span>
                      <span className="font-bold">4.9/5 Rating</span> */}
                    </div>
                    <p className="text-sm opacity-90">
                      Trusted by 200+ international students
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Statistics Cards */}
              <div className="absolute -top-6 right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-600">Pass Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 ">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Japanese Journey?
            </h3>
            <p className="mb-6 opacity-90">
              Join thousands of successful students who achieved their dreams
              with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Free Trial
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
