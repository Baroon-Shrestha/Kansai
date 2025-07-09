import React from "react";

const steps = [
  {
    title: "Step 1: Free Counseling",
    description:
      "Start with a one-on-one session where we understand your goals and explain the pathways to study or work in Japan.",
    icon: "💬",
    gradient: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Step 2: Language Enrollment",
    description:
      "Enroll in our Japanese language classes tailored for JLPT, daily communication, and embassy compliance.",
    icon: "📚",
    gradient: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Step 3: Documentation Support",
    description:
      "We help collect, verify, and format your academic and financial documents for school and visa applications.",
    icon: "📄",
    gradient: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    title: "Step 4: Visa Application",
    description:
      "Once your Certificate of Eligibility (CoE) is issued, we assist with visa forms, embassy appointment, and submission.",
    icon: "🏢",
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    title: "Step 5: Departure Preparation",
    description:
      "We help with flight booking, travel tips, and post-arrival planning so you're fully prepared for life in Japan.",
    icon: "✈️",
    gradient: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    title: "Step 6: Post-Arrival Support",
    description:
      "After arrival, we stay connected—helping with job search, housing, and adjusting to life and culture in Japan.",
    icon: "💼",
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

export default function ServiceFlow() {
  return (
    <div className="min-h-screen  py-16 px-4 mx-6 my-12">
      <div className="bg-[#FFF8F0] pt-20 rounded-4xl">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-4 text-center">
              <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
                Our Expertise
              </span>
            </div>
            <h1 className="text-5xl font-bold  mb-4">
              Our{" "}
              <span className="bg-gradient-to-br from-[#701919] to-[#D1863C] bg-clip-text text-transparent">
                Workflow
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center mx-auto leading-relaxed font-extralight">
              A structured process designed to guide you smoothly from
              consultation to your successful journey to Japan.
            </p>
            <div className="w-24 h-1 bg-gradient-to-br from-[#701919] to-[#D1863C] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative ${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
                </div>

                {/* Step Number */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-md`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-[#333]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Lines for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-20">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards your dream of studying or working in
              Japan.
            </p>
            <button className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
