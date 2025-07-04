import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    name: "Aayush Tamang",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea quibusdam iusto dolore deleniti, nam repellat vitae repudiandae libero. Consectetur mollitia esse saepe, nisi debitis rerum quae magni rem dolor blanditiis nemo non? Ipsum tempora,?",
    rating: 5,
    location: "Tokyo, Japan",
    course: "Computer Science",
  },
  {
    name: "Rashmi Karki",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet iure totam sapiente cumque ea modi doloribus dignissimos, exercitationem necessitatibus fuga? Inventore provident ",
    rating: 4,
    location: "Osaka, Japan",
    course: "Business Administration",
  },
  {
    name: "Sagar Thapa",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, maiores similique inventore deserunt delectus libero assumenda, placeat expedita magni quaerat illum blanditiis ",
    rating: 5,
    location: "Kyoto, Japan",
    course: "Engineering",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#701919]/5 to-[#D1863C]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#D1863C]/5 to-[#701919]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header with enhanced styling */}
        {/* Header section with left-heading and right-button */}
        <div className="mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-left sm:text-center">
          {/* Heading Texts */}
          <div className="flex-1 text-left">
            <div className="mb-4">
              <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#701919] to-[#D1863C] bg-clip-text text-transparent mb-2">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Discover how MOMIJI has transformed dreams into reality for
              students pursuing their education in Japan.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#701919] hover:bg-[#701919] hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#701919] hover:bg-[#701919] hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Enhanced carousel container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main testimonial card */}
          <div className="relative overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full absolute inset-0"
                    : "opacity-0 translate-x-full absolute inset-0"
                }`}
              >
                <div className="bg-white rounded-3xl shadow-2xl py-10 px-2 mx-4 my-2 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#701919] to-[#D1863C]"></div>

                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote size={64} className="text-[#701919]" />
                  </div>

                  {/* Feedback text */}
                  <div className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                    "{item.feedback}"
                  </div>

                  {/* Student info */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xl font-bold text-[#701919] mb-2">
                      {item.name}
                    </h4>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {item.course}
                      </span>
                      <span className="text-[#D1863C] font-semibold">
                        📍 {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        {/* <div className="mt-16">
          <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white py-6 px-8 rounded-2xl max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-xl font-bold mb-2">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 mb-4">
              Join hundreds of successful students who chose MOMIJI
            </p>
            <button className="bg-white text-[#701919] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
