import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const data = [
  {
    name: "Aayush Tamang",
    feedback:
      "Kansai Int’l Language Center provided me with excellent Japanese language training and cultural guidance that truly prepared me for my studies and life in Japan. ?",
    rating: 5,
    location: "Tokyo, Japan",
    course: "Computer Science",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    year: "2024",
  },
  {
    name: "Rashmi Karki",
    feedback:
      "My experience with Kansai Int’l Language Center was outstanding. Their expert language training and cultural workshops gave me the confidence to pursue my education in Japan. The team’s guidance throughout the admission and visa process was clear and reassuring, making my transition hassle-free. I’m grateful for their dedicated support and highly recommend their services.",
    rating: 4,
    location: "Osaka, Japan",
    course: "Business Administration",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c810?w=150&h=150&fit=crop&crop=face",
    year: "2023",
  },
  {
    name: "Sagar Thapa",
    feedback:
      "Kansai Int’l Language Center played a vital role in my successful move to Japan. Their comprehensive language courses and cultural orientation prepared me well for both academic and daily life challenges",
    rating: 5,
    location: "Kyoto, Japan",
    course: "Engineering",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    year: "2024",
  },
  {
    name: "Anjali Bista",
    feedback:
      "From the first counseling session to my arrival in Japan, Kansai Int’l Language Center provided continuous support. Their JLPT classes were well-structured, and the pre-departure sessions helped me adapt quickly once I landed. I’m thankful for their commitment to student success.",
    rating: 5,
    location: "Nagoya, Japan",
    course: "Hospitality Management",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    year: "2024",
  },
  {
    name: "Prakash Shrestha",
    feedback:
      "Kansai made the entire journey smooth and stress-free. They not only helped me improve my language skills but also ensured my documents and visa were handled properly. I couldn’t have done it without their dedicated support.",
    rating: 4,
    location: "Fukuoka, Japan",
    course: "Automotive Technology",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    year: "2023",
  },
  {
    name: "Sneha Lama",
    feedback:
      "What stood out to me about Kansai was their personal approach. They truly care about each student’s success. The instructors were supportive and the cultural training gave me confidence to live independently in Japan.",
    rating: 5,
    location: "Sapporo, Japan",
    course: "Nursing",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
    year: "2024",
  },
  {
    name: "Bibek Gurung",
    feedback:
      "Kansai Int’l Language Center offered exactly what I needed—quality education, visa guidance, and real-life preparation. I highly recommend their services to anyone planning to study or work in Japan.",
    rating: 5,
    location: "Yokohama, Japan",
    course: "Information Technology",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    year: "2023",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered && !isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
        setProgress(0);
      }, 4000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev + 1) % 100);
      }, 40);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [isHovered, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const toggleAutoplay = () => {
    setIsPaused(!isPaused);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        } transition-colors duration-200`}
      />
    ));
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#701919] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D1863C] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Enhanced header section */}
        <div className="mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Heading section */}
          <div className="flex-1 text-left">
            <div className="mb-4">
              <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#701919] to-[#D1863C] bg-clip-text text-transparent mb-4 leading-tight">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Discover how KANSAI has transformed dreams into reality for
              students pursuing their education in Japan.
            </p>
          </div>

          {/* Controls section */}
          <div className="flex items-center gap-4">
            {/* <button
              onClick={toggleAutoplay}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#701919] hover:bg-[#701919] hover:text-white transition-all duration-300 hover:scale-105"
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button> */}
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

        {/* Progress bar */}
        {/* <div className="w-full bg-gray-200 rounded-full h-1 mb-8 overflow-hidden">
          <div
            className="h-1 bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${
                (currentSlide * 100) / data.length + progress / data.length
              }%`,
            }}
          ></div>
        </div> */}

        {/* Enhanced carousel container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main testimonial card */}
          <div className="relative overflow-hidden min-h-[500px]">
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
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mx-4 my-2 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 border border-gray-100">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#701919] via-[#D1863C] to-[#701919]"></div>

                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote size={80} className="text-[#701919]" />
                  </div>

                  {/* Avatar and rating */}
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative mb-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-45 h-45 rounded-full border-4 border-[#D1863C] shadow-lg object-cover"
                      />
                      {/* <div className="absolute -bottom-2 -right-2 bg-[#701919] rounded-full p-1">
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      </div> */}
                    </div>
                    {/* <div className="flex items-center gap-1 mb-2">
                      {renderStars(item.rating)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.rating}.0 out of 5
                    </div> */}
                  </div>

                  {/* Feedback text */}
                  <div className="text-xl text-gray-700 leading-relaxed mb-8 font-light italic text-center max-w-3xl mx-auto">
                    "{item.feedback}"
                  </div>

                  {/* Student info */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-2xl font-bold text-[#701919] mb-3">
                      {item.name}
                    </h4>
                    <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-sm">
                      <span className="text-[#D1863C] font-semibold flex items-center gap-1">
                        📍 {item.location}
                      </span>
                      <span className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white px-4 py-2 rounded-full font-medium shadow-lg">
                        {item.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#701919] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#701919] mb-2">500+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#701919] mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#701919] mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
