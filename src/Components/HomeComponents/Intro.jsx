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

        {/* Content with wrapped text around centered image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-7xl w-full"
        >
          {/* First paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            nesciunt, eos iusto velit accusamus officia quidem, adipisci illo
            fugiat amet at quia! Rerum sunt dicta totam aspernatur, repellat
            repudiandae aliquam.
          </p>

          {/* Content with floating image */}
          <div className="relative">
            {/* Centered floating image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="float-none mx-auto mb-6 md:float-right md:ml-8 md:mb-4 w-full md:w-1/2 lg:w-2/5"
            >
              <img
                src={img1}
                alt="Kansai Academy"
                className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] object-cover object-bottom rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Mission text that wraps around image */}
            <div className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700">
              <p className="mb-4">
                <b>Our mission</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores saepe, temporibus ut eligendi
                reiciendis consectetur rerum incidunt, ex totam voluptas
                reprehenderit. Voluptatem adipisci quae deserunt alias sed! Ab
                sed fugit corporis voluptatem magnam modi, laborum quisquam
                dicta est porro? Molestias corporis laboriosam ducimus, et neque
                non, adipisci repellat debitis similique consequuntur enim
                consectetur, est fugit sunt incidunt accusantium minus explicabo
                tempora cumque blanditiis ea ratione magnam velit eius.
              </p>

              <p className="mb-6">
                Odit obcaecati ex quisquam laboriosam exercitationem tempora quo
                ipsum amet ad voluptatibus corporis facere quasi voluptates,
                officia asperiores deleniti similique a, minus totam eaque
                debitis! Tenetur, amet iure. Rerum minima harum inventore? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                Ducimus corporis exercitationem tempora quo ipsum amet ad
                voluptatibus.
              </p>

              {/* Clear float for the call-to-action */}
              <div className="clear-both text-center mt-8">
                <span className="text-[#F78C1F] font-bold text-lg">
                  Now, it's your turn. Join us. Let's build your future
                  together.{" "}
                </span>
                <br />
                <span className="font-extralight text-center italic">
                  "Start Your Journey At Kansai."
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
