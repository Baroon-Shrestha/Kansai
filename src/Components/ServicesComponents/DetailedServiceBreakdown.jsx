import React, { useState, useEffect, useRef } from "react";

const details = [
  {
    title: "Language Training",
    subtitle: "JLPT N5–N2 Certification",
    gradient: "from-blue-600 via-blue-500 to-indigo-600",
    description:
      "Master Japanese with our comprehensive language program. From basic conversation to business-level proficiency, our structured curriculum covers all aspects of the Japanese language including grammar, vocabulary, kanji, and cultural nuances essential for success in Japan.",
    points: [
      "Native and certified trainers with 5+ years experience",
      "Flexible batch timing to fit your schedule",
      "Comprehensive mock tests and exam preparation",
      "Interactive learning materials and cultural insights",
    ],
  },
  {
    title: "Visa & Documentation",
    subtitle: "Complete Application Support",
    gradient: "from-emerald-600 via-emerald-500 to-teal-600",
    description:
      "Navigate the complex visa process with confidence. Our expert team handles all documentation requirements, from initial application to final approval. We ensure every document meets embassy standards and provide comprehensive support throughout your application journey.",
    points: [
      "Complete document checklist and SOP writing assistance",
      "Professional mock interviews for embassy preparation",
      "100% transparency throughout the entire process",
      "24/7 support for urgent documentation queries",
    ],
  },
  {
    title: "Job & Work Placement",
    subtitle: "Career Success in Japan",
    gradient: "from-purple-600 via-purple-500 to-violet-600",
    description:
      "Launch your career in Japan with our comprehensive placement support. From crafting the perfect Japanese resume to connecting you with top employers, we provide end-to-end career assistance to ensure your professional success in the Japanese job market.",
    points: [
      "Professional resume creation in Japanese format",
      "Comprehensive part-time job guidance post-arrival",
      "Regular career workshops and networking events",
      "Industry connections and placement assistance",
    ],
  },
];

function useOneTimeIntersectionObserver(options = {}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return [ref, hasAnimated];
}

function AnimatedCard({ item, index, delay = 0 }) {
  const [ref, hasAnimated] = useOneTimeIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative">
        <div
          className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
          ></div>

          <div className="relative mb-6">
            <div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {index === 0 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                )}
                {index === 1 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                )}
                {index === 2 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2"
                  />
                )}
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
              {item.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {item.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group/point">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-emerald-500 group-hover/point:text-emerald-600 transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium group-hover/point:text-gray-800 transition-colors duration-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedDescription({ description, index, delay = 0 }) {
  const [ref, hasAnimated] = useOneTimeIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${delay + 100}ms` }}
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-gray-700 leading-relaxed">
          <p className="text-lg font-medium mb-0">{description}</p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span>Comprehensive Support</span>
        </div>
      </div>
    </div>
  );
}

function AnimatedHeader() {
  const [ref, hasAnimated] = useOneTimeIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Your Gateway to
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#701919] to-[#D1863C] bg-clip-text text-transparent">
          Success in Japan
        </span>
      </h2>
      <p className="text-xl text-gray-600 font-extralight max-w-3xl mx-auto leading-relaxed mb-8">
        Comprehensive support services designed to make your Japanese dream a
        reality. From language mastery to career success, we're with you every
        step of the way.
      </p>
      <div className="flex justify-center">
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full"></div>
      </div>
    </div>
  );
}

function StatsSection() {
  const [ref, hasAnimated] = useOneTimeIntersectionObserver();
  const stats = [
    { number: "1000+", label: "Students Placed" },
    { number: "90%", label: "Success Rate" },
    { number: "20+", label: "Partner universities" },
  ];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DetailedServiceBreakdown() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Service Details
          </span>
        </div>
        <AnimatedHeader />

        {/* Services Grid - Zigzag Layout */}
        <div className="space-y-16 mb-20">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content Side */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <AnimatedCard item={item} index={idx} delay={idx * 200} />
              </div>

              {/* Description Side */}
              <div className={`${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <AnimatedDescription
                  description={item.description}
                  index={idx}
                  delay={idx * 200}
                />
              </div>
            </div>
          ))}
        </div>

        <StatsSection />
      </div>
    </section>
  );
}
