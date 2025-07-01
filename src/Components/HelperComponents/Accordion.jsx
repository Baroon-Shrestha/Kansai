import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Individual Accordion Item Component
export default function AccordionItem({
  id,
  title,
  description,
  isOpen,
  toggleAccordion,
}) {
  return (
    <div className="mb-4 bg-white rounded-2xl shadow-sm border border-gray-100">
      <button
        onClick={toggleAccordion}
        className="w-full px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left gap-3 hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
      >
        <div className="flex items-start sm:items-center space-x-3">
          <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {id}
          </div>
          <div className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 leading-snug sm:leading-none">
            {title}
          </div>
        </div>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } text-gray-500 self-end sm:self-auto`}
        >
          <ChevronDown size={24} />
        </div>
      </button>

      {/* Smooth animated content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl font-extralight text-justify text-slate-900 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
