import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Plane,
  Home,
} from "lucide-react";

export default function WhyChooseUSGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Certified Language Coaching",
      description:
        "Qualified instructors to guide you through JLPT/NAT preparation from beginner to advanced levels.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Real-World Cultural Practices",
      description:
        "Practical exposure to Japanese traditions, etiquette, and lifestyle before departure.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Personalized Batch Learning",
      description:
        "Focused batch sizes ensuring personalized support and active participation.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Documentation & Translation Support",
      description:
        "Professional help with document verification, Japanese form-filling, and translations.",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Pre-departure Simulation",
      description:
        "Prepare through mock living situations, including train travel, food, and daily communication.",
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Full Journey Mentorship",
      description:
        "We stay with you from the first counseling session till your settlement in Japan.",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Services Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#D1863C] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#701919] to-[#D1863C] text-white rounded-xl flex items-center justify-center transition-all duration-300">
                    <div className="text-white group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300 text-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
