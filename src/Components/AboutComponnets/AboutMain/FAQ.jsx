import React, { useState } from "react";
import Accordion from "../../HelperComponents/Accordion";
import AccordionItem from "../../HelperComponents/Accordion";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());
  const data = [
    {
      id: 1,
      title: "What programs do you offer for studying in Japan?",
      description:
        "We provide a complete roadmap for students planning to study in Japan. This includes Japanese language training (N5 to N1), preparation for the Specified Skilled Worker (SSW) program, as well as assistance with undergraduate, graduate, and vocational school admissions. Whether you're aiming for academic study or professional training, our consultancy helps you identify the right path, institution, and course based on your goals. We also guide you through every step—application, documentation, visa processing, and post-arrival support.",
      isOpen: false,
    },

    {
      id: 2,
      title: "Do I need to know Japanese before applying?",
      description:
        "Yes, basic proficiency in Japanese is highly recommended. Most Japanese institutions require at least an N5 or N4 level in the Japanese Language Proficiency Test (JLPT). If you're applying for SSW or vocational schools, passing language and skills tests is mandatory. Don’t worry—we provide certified language classes that help you build fluency, cultural understanding, and communication skills. Our language training also includes mock interviews and exam preparation tailored for Japanese institutions and job roles.",
      isOpen: false,
    },
    {
      id: 3,
      title: "What are the costs involved in studying in Japan?",
      description:
        "Studying in Japan involves multiple expenses including tuition fees, application charges, visa processing, flight tickets, insurance, and daily living costs. Tuition may range from ¥500,000 to ¥1,000,000 per year depending on the program and institution. Additionally, living expenses (rent, food, transport) can average ¥80,000–¥150,000 per month. We offer transparent, itemized cost breakdowns and help you budget effectively. Some costs are one-time (like documentation), while others are ongoing. We’ll help you plan accordingly.",
      isOpen: false,
    },
    {
      id: 4,
      title: "Can you help with student visa processing?",
      description:
        "Absolutely! Visa processing is one of our core services. We ensure your application meets the exact requirements set by the Japanese immigration authority. This includes preparing your academic transcripts, financial documents, admission letters, and health records. We also guide you through the Certificate of Eligibility (CoE) process and coordinate with Japanese schools for timely approvals. From filling forms to tracking progress, our team takes care of all the steps to minimize rejection risks.",
      isOpen: false,
    },
  ];

  const toggleAccordion = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  return (
    <>
      <div className="px-6">
        <div className="bg-[#FFF8F0]  rounded-4xl">
          <div className="container mx-auto py-20">
            <div className="flex flex-col items-center gap-4 pb-6">
              <div className="mb-4 text-center">
                <span className="text-[#701919] font-medium text-sm tracking-wide uppercase">
                  FAQ's
                </span>
              </div>
              <div className="font-extrabold text-4xl capitalize text-center">
                got questions? here are some Frequently asked questions
              </div>
              <div className="text-lg font-extralight max-w-5xl text-center">
                Have questions about studying, training, or working in Japan?
                We've compiled answers to the most common inquiries to help you
                better understand our process, services, and how we support your
                journey from consultation to settlement. If your question isn’t
                listed, feel free to reach out to our team directly.
              </div>
            </div>
            <div className="space-y-2">
              {data.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  isOpen={openItems.has(item.id)}
                  toggleAccordion={() => toggleAccordion(item.id)}
                />
              ))}
            </div>

            <Link to="/faq">
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  See more FAQ's
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
