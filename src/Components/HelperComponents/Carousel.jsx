import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample team data with placeholder images
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Jane Smith",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b332c810?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Alice Johnson",
    role: "Front Desk Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Mark Lee",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Emma Brown",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Ryan White",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Sarah Davis",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "John Doe",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
  {
    name: "Alex Doe",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
  },
];

export default function Carousel() {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const checkScrollButtons = () => {
    const element = scrollRef.current;
    if (element) {
      setCanScrollLeft(element.scrollLeft > 0);
      setCanScrollRight(
        element.scrollLeft < element.scrollWidth - element.clientWidth
      );
    }
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
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
    <div className="max-w-8xl mx-auto px-8 pt-8">
      <div className="relative">
        <div className="font-extralight text-center capitalize text-xl pb-6 gap-3">
          Slide for more
        </div>
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
              onClick={() => openModal(index)}
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

        <div className="font-extralight text-center capitalize text-xl pt-6 gap-3">
          Click to view deatils
        </div>
      </div>
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <img
                src={teamMembers[selectedIndex].image}
                alt={teamMembers[selectedIndex].name}
                className="w-[200px] h-[200px] object-cover rounded-full shadow-lg border-4 border-[#D1863C]"
              />
              <button
                onClick={closeModal}
                className="absolute top-0 right-5 text-red-700 hover:text-red-400"
              >
                <X size={30} />
              </button>

              <div className="text-left space-y-2">
                <h2 className="text-3xl font-bold text-[#701919]">
                  {teamMembers[selectedIndex].name}
                </h2>
                <h4 className="text-lg font-semibold text-[#D1863C]">
                  {teamMembers[selectedIndex].role}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {teamMembers[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
