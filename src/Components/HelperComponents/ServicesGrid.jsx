import React, { useState, useRef, useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Comprehensive Language Courses",
    description:
      "Master Japanese from beginner to advanced levels with our structured curriculum aligned with JLPT/NAT standards.",
    features: [
      "JLPT N5-N1 Preparation",
      "Interactive Learning",
      "Native Instructors",
      "Flexible Schedules",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    icon: "📚",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "School/University Placement",
    description:
      "Your gateway to Japan's top educational institutions with personalized guidance and application support.",
    features: [
      "Language Schools",
      "Vocational Colleges",
      "University Partners",
      "Application Support",
    ],
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    icon: "🏫",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Visa & Embassy Support",
    description:
      "Navigate the complex visa process with confidence through our comprehensive documentation and interview preparation.",
    features: [
      "COE Processing",
      "Document Review",
      "Interview Prep",
      "Status Tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    icon: "📋",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    title: "Exam Registration & Guidance",
    description:
      "Excel in JLPT and NAT exams with our strategic preparation methods and official registration assistance.",
    features: [
      "Exam Registration",
      "Study Materials",
      "Mock Tests",
      "Test-day Support",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    icon: "🎯",
    color: "from-rose-500 to-pink-600",
  },
];

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <div ref={sectionRef} className="min-h-screen py-12">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transition-all duration-1000 delay-[${
                index * 150
              }ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                  ></div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>

                  {/* Service Number */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {String(service.id).padStart(2, "0")}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-gray-500 transition-all duration-300 hover:text-amber-600"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div
          className={`text-center mt-16 transition-all duration-1000 delay-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-gray-600">Ready to start your journey?</span>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
