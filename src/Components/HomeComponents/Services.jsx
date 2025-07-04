import React, { useRef } from "react";
import ServicesGrid from "../HelperComponents/ServicesGrid";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="py-20" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          className="mb-4 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
            Our services
          </span>
        </motion.div>

        <motion.div
          className="flex items-center flex-col gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#701919]">
            Our services
          </div>
          <div className="text-base sm:text-lg font-extralight max-w-3xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
            voluptatibus temporibus rerum vitae ipsam delectus consequatur
            laboriosam recusandae maiores quas!
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ServicesGrid />
      </motion.div>
    </div>
  );
}
