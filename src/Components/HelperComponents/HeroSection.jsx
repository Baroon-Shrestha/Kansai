import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({ title, subtitle, bgImage, current }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-400/15 rounded-full blur-md"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 font-extralight max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="text-sm md:text-lg font-extralight flex items-center gap-2 uppercase mt-6"
          variants={itemVariants}
        >
          <Link to="/">
            <div>home</div>
          </Link>
          <ChevronRight className="text-sm" />
          <Link to="">
            <div>{current}</div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
