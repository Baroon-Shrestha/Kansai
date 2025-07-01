import React from "react";
import {
  Users,
  BookOpen,
  Lightbulb,
  UserCheck,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export default function Services2() {
  return (
    <section className="bg-[#FFF8F0] min-h-screen px-6 py-16 mx-6 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            SERVICES
          </span>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header Content */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why people suggest to learn our courses.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              We focus on industry leading platforms so that you can be prepared
              for your next job. Then we teach all we can — Overpass is the
              solution.
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
                Industry expert teachers
              </h3>
              <div className="flex justify-end mt-4 sm:mt-6">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>

            {/* More than +20 categories */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                More than +20 categories
              </h3>
              <div className="flex justify-end mt-4 sm:mt-6">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>

            {/* Creative thinking with exam */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                Creative thinking with exam
              </h3>
              <div className="flex justify-end mt-4 sm:mt-6">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>

            {/* Private monitoring & suggestions */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                Private monitoring & suggestions
              </h3>
              <div className="flex justify-end mt-4 sm:mt-6">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>

            {/* Affordable prices with discount - spans 2 columns */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                Affordable prices with discount
              </h3>
              <div className="flex justify-end mt-4 sm:mt-6">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Main Title Card */}
          <div className="col-span-2 pr-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why people suggest to learn our courses.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We focus on industry leading platforms so that you can be prepared
              for your next job. Then we teach all we can — Overpass is the
              solution.
            </p>
          </div>

          {/* Industry Expert Teachers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Industry expert teachers
            </h3>
            <div className="flex justify-end mt-8">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* More than +20 categories */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              More than +20 categories
            </h3>
            <div className="flex justify-end mt-8">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Empty space */}
          <div></div>

          {/* Creative thinking with exam */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Creative thinking with exam
            </h3>
            <div className="flex justify-end mt-8">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Private monitoring & suggestions */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Private monitoring & suggestions
            </h3>
            <div className="flex justify-end mt-8">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Affordable prices with discount */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Affordable prices with discount
            </h3>
            <div className="flex justify-end mt-8">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex items-center justify-center pt-8 sm:pt-12">
          <button className="bg-[#701919]  text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3 font-medium transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
            Contact Us
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#701919]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
