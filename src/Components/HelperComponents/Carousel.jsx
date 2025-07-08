import React, { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Sample team data with placeholder images
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "john.doe@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Jane Smith",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b332c810?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "jane.smith@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Alice Johnson",
    role: "Front Desk Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "alice.johnson@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Mark Lee",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "mark.lee@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Emma Brown",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "emma.brown@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Ryan White",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "ryan.white@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Sarah Davis",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "sarah.davis@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "John Doe",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "john.doe2@company.com",
    phone: "981-XXXXXXX",
  },
  {
    name: "Alex Doe",
    role: "Instructor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam optio repudiandae, vel debitis similique ut laudantium dolor tempora, doloremque nulla. Id dolor sapiente molestiae natus earum. Voluptate officia molestias, iste vitae sit at qui praesentium deleniti perferendis iusto sequi obcaecati? Ea natus consequuntur ex sint quisquam laudantium ullam consequatur omnis ab fugiat nemo necessitatibus optio veritatis amet, officia tenetur! Laborum, culpa? Veritatis, corporis temporibus impedit optio dicta nam iure velit voluptatum, asperiores nostrum perferendis!",
    email: "alex.doe@company.com",
    phone: "981-XXXXXXX",
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

  const navigateModal = (direction) => {
    if (direction === "next" && selectedIndex < teamMembers.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (direction === "prev" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          navigateModal("prev");
        } else if (e.key === "ArrowRight") {
          navigateModal("next");
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedIndex]);

  const scroll = (direction) => {
    const element = scrollRef.current;
    if (element) {
      const scrollAmount = 320;
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
    <div className="max-w-8xl mx-auto pb-10 min-h-[75vh]">
      <div className="relative pt-8">
        {/* Scroll Instructions */}
        <div className="flex items-center gap-4 my-4 pb-6 justify-center">
          <ArrowLeft className="text-[#D1863C]" />
          <div className="font-light text-lg text-gray-700">Slide for more</div>
          <ArrowRight className="text-[#D1863C]" />
        </div>

        {/* Carousel */}
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
              className="min-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                         border border-gray-100 cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Click to view details</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#701919] mb-2 group-hover:text-[#D1863C] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#D1863C] font-medium text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Click instruction */}
        <div className="font-light text-center text-lg pt-6 text-gray-700">
          Click any card to view details
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl max-h-[90vh] overflow-auto relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation arrows */}
            {selectedIndex > 0 && (
              <button
                onClick={() => navigateModal("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft size={24} className="text-[#701919]" />
              </button>
            )}
            {selectedIndex < teamMembers.length - 1 && (
              <button
                onClick={() => navigateModal("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight size={24} className="text-[#701919]" />
              </button>
            )}

            <div className="flex flex-col lg:flex-row items-center gap-8 pt-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={teamMembers[selectedIndex].image}
                  alt={teamMembers[selectedIndex].name}
                  className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-[#D1863C]"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-[#701919] mb-2">
                    {teamMembers[selectedIndex].name}
                  </h2>
                  <h4 className="text-xl font-semibold text-[#D1863C] mb-4">
                    {teamMembers[selectedIndex].role}
                  </h4>
                </div>

                {/* Contact Information */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} className="text-[#D1863C]" />
                    <span className="text-sm">
                      {teamMembers[selectedIndex].email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} className="text-[#D1863C]" />
                    <span className="text-sm">
                      +977 {teamMembers[selectedIndex].phone}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h5 className="text-lg font-semibold text-[#701919] mb-3">
                    About
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    {teamMembers[selectedIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                {selectedIndex + 1} of {teamMembers.length} team members
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
