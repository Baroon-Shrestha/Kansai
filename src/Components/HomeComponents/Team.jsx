import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "../HelperComponents/Carousel";

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
      <div className="container mx-auto py-16">
        <div className="mb-4 text-center">
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Our Team
          </span>
        </div>
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
        <Carousel />
      </div>
    </>
  );
}
