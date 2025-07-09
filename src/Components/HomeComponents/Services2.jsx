import React, { useRef } from "react";
import {
  Users,
  BookOpen,
  Lightbulb,
  UserCheck,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Services2() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-[#FFF8F0] min-h-[80vh] px-6 py-16 mx-6 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-4">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            {t("nav.service")}
          </span>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header Content */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("home.service.heading")}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              {t("home.service.subheading")}
            </p>
          </div>

          {/* Service Cards - 2x3 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Industry Expert Teachers */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {t("home.service.service1")}
              </h3>
            </div>

            {/* More than +20 categories */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {t("home.service.service2")}
              </h3>
            </div>

            {/* Creative thinking with exam */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {t("home.service.service3")}
              </h3>
            </div>

            {/* Private monitoring & suggestions */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {t("home.service.service4")}
              </h3>
            </div>

            {/* Affordable prices with discount - spans 2 columns */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {t("home.service.service5")}
              </h3>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Main Title Card */}
          <div className="col-span-2 pr-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("home.service.heading")}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {t("home.service.subheading")}
            </p>
          </div>

          {/* Industry Expert Teachers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.service.service1")}
            </h3>
          </div>

          {/* More than +20 categories */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.service.service2")}
            </h3>
          </div>

          {/* Empty space */}
          <div></div>

          {/* Creative thinking with exam */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.service.service3")}
            </h3>
          </div>

          {/* Private monitoring & suggestions */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.service.service4")}
            </h3>
          </div>

          {/* Affordable prices with discount */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.service.service5")}
            </h3>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex items-center justify-center pt-8 sm:pt-12">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
