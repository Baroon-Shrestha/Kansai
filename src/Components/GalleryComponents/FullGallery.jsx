import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import LazyMotionItem from "../HelperComponents/LazyMotionItem";
import HeroSection from "../HelperComponents/HeroSection";

export default function FullGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Load only image files
  const imageModules = import.meta.glob(
    "../../assets/Images/*.{jpeg,jpg,avif,png}",
    { eager: true }
  );

  const imageFiles = Object.entries(imageModules).map(([_, mod]) => ({
    src: mod.default,
    type: "image",
  }));

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % imageFiles.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? imageFiles.length - 1 : prev - 1));
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Dive into our moments—memorable, meaningful, and full of motion."
        bgImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80"
        current="gallery"
      />

      {/* 3-Column Grid Layout */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageFiles.map((file, index) => (
            <motion.div
              key={index}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openModal(index)}
            >
              <LazyMotionItem type={file.type} src={file.src} />
              <div className="absolute inset-0 bg-blck bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center flex-col gap-6">
          <div className="text-center text-xl mt-12 text-gray-500">
            You’ve reached the end of our gallery
          </div>
          <div className="bg-gradient-to-br from-[#701919] to-[#D1863C] rounded-2xl inline-block uppercase text-xl text-white py-4 px-12 font-extrabold ">
            Become a part of Kansai.
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white hover:text-red-400"
          >
            <X size={30} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 text-white hover:scale-110"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-5xl max-h-[90vh] mx-auto">
            <img
              src={imageFiles[selectedIndex].src}
              alt="modal"
              className="max-w-full max-h-[90vh] object-contain rounded"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:scale-110"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
