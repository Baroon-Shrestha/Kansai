import React from "react";
import {
  BookOpen,
  Briefcase,
  Globe,
  FileText,
  UserCheck,
  Home,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: <Globe />,
    title: "Study in Japan",
    desc: "University and college placements across Japan.",
  },
  {
    icon: <Briefcase />,
    title: "Work in Japan",
    desc: "Job support and legal guidance for working students.",
  },
  {
    icon: <BookOpen />,
    title: "Language Training",
    desc: "JLPT-focused courses from N5 to N2.",
  },
  {
    icon: <FileText />,
    title: "Visa Support",
    desc: "Full documentation & visa guidance.",
  },
  {
    icon: <ClipboardList />,
    title: "Pre-departure Orientation",
    desc: "Travel, housing, culture tips.",
  },
  {
    icon: <Home />,
    title: "Post-arrival Support",
    desc: "Airport pickup, part-time job setup.",
  },
  {
    icon: <UserCheck />,
    title: "Career Counseling",
    desc: "Plan your path with experienced advisors.",
  },
];

export default function ServiceOverviewGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#701919] mb-6">
          Our Core Services
        </h2>
        <p className="text-gray-600 mb-12">
          Everything you need to study, work, and settle in Japan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
