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
import { useTranslation } from "react-i18next";

const icons = [
  <FileCheck2 size={28} />,
  <UserCheck size={28} />,
  <MapPin size={28} />,
  <MessageSquareHeart size={28} />,
  <CheckCircle size={28} />,
  <GraduationCap size={28} />,
];

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const reasons = t("home.why.whychoose", { returnObjects: true });
  return (
    <section className="py-20  px-6 rounded-4xl mx-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Why Kansai?
          </span>
        </div>
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#701919] mb-4">
          {t("home.why.heading")}
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full mb-8" />
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          {t("home.why.subheading")}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="text-[#701919] mb-4">{icons[index]}</div>
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
