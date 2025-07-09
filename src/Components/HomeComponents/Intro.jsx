import React from "react";
import img1 from "../../assets/school.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
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
            {t("home.hero.greet")}{" "}
            <span className="text-[#F78C1F]">
              {t("home.hero.heading1")} {t("home.hero.heading2")}
            </span>
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
            <b>Kansai International Langauge center</b> is dedicated to bridging
            the gap between aspirations and opportunities. We specialize in
            guiding students, professionals, and trainees toward a successful
            career in Japan by offering tailored language training, document
            support, and visa-process assistance — all under one roof.
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
                At Kansai, <b>Our aim</b> is to become a trusted gateway for
                individuals seeking education, training, and employment in
                Japan. We are committed to delivering quality services that
                prepare clients for global success while maintaining integrity,
                professionalism, and client satisfaction at every step.
              </p>

              <p className="mb-6">
                From our expert counseling sessions to our structured language
                programs and document handling, every service is designed to
                simplify your journey abroad. Our team ensures each student is
                fully prepared — academically, culturally, and emotionally — to
                thrive in the Japanese environment. With years of experience and
                a network of reliable institutions, Kansai stands by you from
                your first inquiry to your final departure.
              </p>

              {/* Clear float for the call-to-action */}
              <div className="clear-both text-center mt-8">
                <span className="text-[#F78C1F] font-bold text-lg">
                  {t("home.intro.ending1")}
                </span>
                <br />
                <span className="font-extralight text-center italic">
                  {t("home.intro.ending2")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
