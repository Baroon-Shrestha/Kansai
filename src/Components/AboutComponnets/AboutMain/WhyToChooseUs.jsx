import React from "react";
import {
  CheckCircle,
  UserCheck,
  FileCheck2,
  MapPin,
  Users,
  MessageSquareHeart,
  GraduationCap,
} from "lucide-react";

const reasons = [
  {
    icon: <FileCheck2 size={28} />,
    title: "High Visa Approval Rate",
    description:
      "We maintain an excellent record in helping students get their Japan study visas approved swiftly and correctly.",
  },
  {
    icon: <UserCheck size={28} />,
    title: "Tailored Education Plans",
    description:
      "We personalize language training, job coaching, and consulting based on your goals and current proficiency.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Strong Japanese Network",
    description:
      "We partner with top institutions and employers across Japan to create real pathways for your future.",
  },
  {
    icon: <MessageSquareHeart size={28} />,
    title: "Native Language Support",
    description:
      "Our staff speaks Nepali, English, and Japanese — ensuring you’re understood at every step.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Complete Journey Assistance",
    description:
      "From interview prep to accommodation and culture training — we’re with you before and after arrival.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "1500+ Student Success Stories",
    description:
      "Thousands have achieved their academic and professional dreams through our guidance and care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f9f9f9] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Who Are We?
          </span>
        </div>
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#701919] mb-4">
          Why Choose Us?
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full mb-8" />
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          At Kansai International Academy, we believe each student deserves a
          clear path and full support. Discover why students trust us to guide
          them to Japan.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="text-[#701919] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#701919]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
