import React from "react";
import {
  BookOpen,
  Briefcase,
  Globe,
  FileText,
  UserCheck,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: <GraduationCap />,
    title: "Direct Tie-ups with Japanese Universities",
    desc: "Get accepted to top Japanese universities with our expert guidance and application support.",
  },

  {
    icon: <BookOpen />,
    title: "Certified Language Trainers with Native Experience",
    desc: "Master Japanese with our intensive JLPT preparation courses from N5 to N1 levels.",
  },
  {
    icon: <Globe />,
    title: "Cultural Immersion Bootcamps",
    desc: "Pre-departure orientation and cultural training to help you adapt to Japanese society.",
  },
  {
    icon: <UserCheck />,
    title: "Career Counseling by Native & Returnee Experts",
    desc: "Personalized guidance from experienced counselors to plan your academic and career journey.",
  },
];

export default function ServiceOverviewGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Our Expertise
          </span>
        </div>
        <h2 className="text-4xl font-bold text-[#701919] mb-6">
          Our Core services
        </h2>
        <p className="text-gray-600 mb-12">
          Your trusted partner for education and career opportunities in Japan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="text-[#D1863C] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
