import React from "react";
import { BookOpen, Users, Award, Globe, Star, TrendingUp } from "lucide-react";
import image from "../../../assets/Images/school.jpg";
const skills = [
  {
    id: 1,
    title: "N2 to N5",
    icon: BookOpen,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 2,
    title: "Cultural Knowledge",
    icon: Globe,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: 3,
    title: "Work-related Experience",
    icon: Users,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    id: 4,
    title: "JLPT Preparation",
    icon: Award,
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: 5,
    title: "Expert Guidance",
    icon: Star,
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
];

export default function Boost() {
  return (
    <div className="py-16 mx-6 rounded-3xl bg-[#FFF8F0] relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 "></div>
            <div className="relative ">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="text-slate-400 text-center bg-gradient-to-r from-[#701919] to-[#D1863C] p-4 rounded-2xl">
                  <img src={image} alt="" className="rounded-xl" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 pt-4  border-gray-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="mb-4">
                <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
                  Boost Your Knowledge
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Boost Your
                <span className="bg-[#701919] text-transparent bg-clip-text">
                  {" "}
                  Japanese Language
                </span>{" "}
                Level With Us
              </h2>

              <p className="text-xl font-extralight text-gray-600 leading-relaxed">
                Master Japanese with our comprehensive program designed for all
                levels. From basic conversation to business proficiency, we
                provide expert guidance and cultural insights to accelerate your
                learning journey.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What You'll Learn:
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.id}
                      className={`${skill.color} text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-sm">
                          {skill.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
