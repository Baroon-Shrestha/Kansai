import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Jane Smith",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b332c810?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Alice Johnson",
    role: "Front Desk Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Mark Lee",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emma Brown",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ryan White",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sarah Davis",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
  },
];

export default function Team() {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const element = scrollRef.current;
    if (element) {
      setCanScrollLeft(element.scrollLeft > 0);
      setCanScrollRight(
        element.scrollLeft < element.scrollWidth - element.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", checkScrollButtons);
      return () => element.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    if (element) {
      const scrollAmount = 320; // Card width + gap
      const targetScrollLeft =
        direction === "left"
          ? element.scrollLeft - scrollAmount
          : element.scrollLeft + scrollAmount;

      element.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
          Our Team
        </div>
        <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
        <div className="flex items-center flex-col gap-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#701919]">
            Meet Our Team
          </div>
          <div className="text-base sm:text-xl md:text-xl font-extralight max-w-3xl text-center">
            Professionals dedicated to delivering exceptional experiences. Each
            member brings unique expertise and creativity to make our vision a
            reality.
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute -left-15 hidden md:block top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-200 ${
                canScrollLeft
                  ? "bg-[#D1863C] text-white hover:bg-[#b06b2c] hover:scale-105 shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute hidden md:block -right-15 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-200 ${
                canScrollRight
                  ? "bg-[#D1863C] text-white hover:bg-[#b06b2c] hover:scale-105 shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>

            {/* Team Cards */}
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-12"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
                         border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[240px] w-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#701919] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#D1863C] font-medium text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
