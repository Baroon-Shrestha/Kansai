import React from "react";
import img1 from "../../assets/school.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} className="container mx-auto my-12 px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-[#F78C1F]">KANSAI INTERNATIONAL ACADEMY</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
            Leading students to a bright future in JAPAN.
          </p>
        </motion.div>

        {/* Body Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700 max-w-7xl"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          nesciunt, eos iusto velit accusamus officia quidem, adipisci illo
          fugiat amet at quia! Rerum sunt dicta totam aspernatur, repellat
          repudiandae aliquam. <br />
          <br />
          <b>Our mission</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores saepe, temporibus ut eligendi reiciendis consectetur
          rerum incidunt, ex totam voluptas reprehenderit. Voluptatem adipisci
          quae deserunt alias sed! Ab sed fugit corporis voluptatem magnam modi,
          laborum quisquam dicta est porro? Molestias corporis laboriosam
          ducimus, et neque non, adipisci repellat debitis similique
          consequuntur enim consectetur, est fugit sunt incidunt accusantium
          minus explicabo tempora cumque blanditiis ea ratione magnam velit
          eius. Odit obcaecati ex quisquam laboriosam exercitationem tempora quo
          ipsum amet ad voluptatibus corporis facere quasi voluptates, officia
          asperiores deleniti similique a, minus totam eaque debitis! Tenetur,
          amet iure. Rerum minima harum inventore?. <br />
          <br />
          <div className="text-center">
            <span className="text-[#F78C1F] font-bold">
              Now, it’s your turn. Join us. Let’s build your future together.{" "}
            </span>
            <br />
            <span className="font-extralight text-center">
              "Start Your Journey At Kansai."
            </span>
          </div>
        </motion.p>

        {/* Image */}
        <motion.img
          src={img1}
          alt="Kansai Academy"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] object-cover object-bottom rounded-2xl"
        />
      </div>
    </section>
  );
}
