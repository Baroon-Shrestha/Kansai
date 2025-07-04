import React from "react";

const steps = [
  {
    title: "Free Counseling",
    description:
      "Get personalized guidance from our expert counselors who understand your career goals. We'll assess your skills and match you with the best opportunities in Japan.",
    icon: "💬",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Language Training",
    description:
      "Master essential Japanese language skills through our comprehensive training program. Our courses are designed specifically for workplace communication and daily life.",
    icon: "📚",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Documentation & Visa",
    description:
      "We handle all your paperwork and visa applications with precision. Our experienced team ensures your documents meet all requirements for a smooth process.",
    icon: "📄",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Embassy Preparation",
    description:
      "Prepare confidently for your embassy interview with our mock sessions. We provide you with all the tips and practice you need to succeed.",
    icon: "🏢",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Departure & Arrival",
    description:
      "From airport assistance to your first day in Japan, we're with you every step. Our support team ensures a comfortable transition to your new life.",
    icon: "✈️",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Post-arrival Job Support",
    description:
      "Continue receiving support even after you arrive in Japan. We help with job placement, workplace integration, and ongoing career development.",
    icon: "💼",
    color: "from-orange-500 to-orange-600",
  },
];

export default function ServiceFlow() {
  return (
    <section className="py-16 bg-gray-100 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            WorkFlow
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 md:mb-16 text-center">
          How We Work?
        </h2>

        {/* Mobile/Tablet Layout - Vertical */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-800"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-20">
                {/* Step number circle */}
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">
                    {index + 1}
                  </div>
                </div>

                {/* Step card */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-semibold text-red-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:block relative">
          {/* Top row - steps 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-8 mb-24 relative">
            {/* Horizontal connecting line for top row */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-800 z-0"></div>

            {steps.slice(0, 3).map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-orange-500 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-semibold text-red-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step number circle */}
                <div className="absolute -top-8 right-0 transform -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-extrabold text-2xl shadow-lg ">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical connecting line from step 3 to step 4 */}
          <div className="absolute right-1/6 top-52 w-0.5 h-30 bg-gradient-to-b from-red-800 to-orange-500 transform translate-x-1/2"></div>

          {/* Bottom row - steps 6, 5, 4 (reversed order) */}
          <div className="grid grid-cols-3 gap-8 relative">
            {/* Horizontal connecting line for bottom row */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-l from-orange-500 to-red-800 z-0"></div>

            {steps
              .slice(3, 6)
              .reverse()
              .map((step, index) => {
                const originalIndex = 5 - index; // Calculate original step number
                return (
                  <div key={originalIndex} className="relative">
                    {/* Step card */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-orange-500 relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-xl font-semibold text-red-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step number circle */}
                    <div className="absolute -top-8 right-0 transform -translate-x-1/2 z-20">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-extrabold text-2xl shadow-lg ">
                        {originalIndex + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
