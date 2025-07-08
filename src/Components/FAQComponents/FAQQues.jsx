import React, { useState } from "react";

import AccordionItem from "../HelperComponents/Accordion";

export default function FAQQues() {
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
    {
      id: 5,
      title: "What are your class timings and duration?",
      description:
        "We offer flexible class schedules to accommodate students' availability. Morning, afternoon, and evening batches are available throughout the week. Each class is typically 1.5 to 2 hours long, and the complete N5 to N1 Japanese language program can take anywhere from 6 months to 2 years depending on the student's pace and chosen level.",
      isOpen: false,
    },
    {
      id: 6,
      title: "How long does the entire process take to go to Japan?",
      description:
        "The process generally takes 6 to 12 months from language enrollment to visa approval and departure. This includes language preparation, school/university application, documentation, CoE issuance, and visa processing. The timeline may vary based on your program and application period.",
      isOpen: false,
    },
    {
      id: 7,
      title: "What documents are required for studying in Japan?",
      description:
        "You will need academic transcripts, certificates, passport, recommendation letters, bank statements, guarantor documents, and language proficiency proof. Our team provides a detailed checklist and assists in preparing and verifying all required documents before submission.",
      isOpen: false,
    },
    {
      id: 8,
      title: "Is accommodation support provided in Japan?",
      description:
        "Yes, we coordinate with Japanese institutions and hostels to arrange student accommodation. We help you find budget-friendly, safe, and student-friendly options near your school or workplace. Our support includes guidance on contracts, rent procedures, and local regulations.",
      isOpen: false,
    },
    {
      id: 9,
      title: "Can I work part-time while studying in Japan?",
      description:
        "Yes, international students in Japan are allowed to work part-time for up to 28 hours per week with a proper work permit. We guide you in applying for this permit and also assist in finding suitable part-time job opportunities in your area of residence.",
      isOpen: false,
    },
    {
      id: 10,
      title: "Do you help students apply for scholarships in Japan?",
      description:
        "Yes, we provide information about available scholarships offered by Japanese government, universities, and private foundations. We also assist in preparing the necessary documents, recommendation letters, and essays required to apply for these scholarships.",
      isOpen: false,
    },
    {
      id: 11,
      title: "What if my visa application is rejected?",
      description:
        "While we take utmost care to ensure all documents meet embassy standards, in rare cases of rejection we review the reason and re-apply accordingly. We support you in correcting errors, re-submitting forms, and ensuring compliance with immigration rules.",
      isOpen: false,
    },
    {
      id: 12,
      title:
        "Do you offer cultural orientation or Japanese etiquette training?",
      description:
        "Absolutely! We believe understanding Japanese culture is essential for successful integration. Our classes include modules on customs, manners, work ethics, greetings, and behavioral expectations to help you adapt smoothly to life in Japan.",
      isOpen: false,
    },
    {
      id: 13,
      title: "Are your language classes JLPT certified?",
      description:
        "Yes, our Japanese language courses are structured to align with JLPT (Japanese Language Proficiency Test) standards. We prepare students for N5 to N1 levels with certified instructors and mock exams to ensure readiness for official tests.",
      isOpen: false,
    },
    {
      id: 14,
      title: "Can I switch from a language course to a university later?",
      description:
        "Yes, many students begin with a language school and transition to universities or vocational schools after achieving JLPT certification. We guide you through this transition by helping with applications, credit transfers, and new visa arrangements.",
      isOpen: false,
    },
    {
      id: 15,
      title: "What support do you provide after I reach Japan?",
      description:
        "Our support doesn’t end at departure. We offer post-arrival assistance including airport pickup coordination, city registration, SIM card guidance, bank account setup, and emergency support through our local partners and alumni network in Japan.",
      isOpen: false,
    },
    {
      id: 16,
      title: "Do you assist with family support or dependent visas?",
      description:
        "Yes, we can guide students interested in bringing family members through dependent visa applications, provided certain eligibility and financial conditions are met. We help with documentation, timelines, and legal requirements.",
      isOpen: false,
    },
    {
      id: 17,
      title: "How are the language class fees structured?",
      description:
        "Our Japanese language courses are affordably structured with monthly and full-course payment options. Discounts are available for full payments and referrals. The fee structure varies based on level (N5 to N1) and duration selected.",
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
              <div className="text-lg font-extralight max-w-4xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium ad ab sed aut sit ipsa et beatae dignissimos, nemo
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                eveniet, possimus maiores voluptate ratione repudiandae nemo
                voluptas consectetur ea dolorum odit.
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
          </div>
        </div>
      </div>
    </>
  );
}
