import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Comprehensive Language Courses",
    description:
      "Enroll in beginner to advanced Japanese language courses aligned with JLPT/NAT exam levels.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "School/University Placement in Japan",
    description:
      "We help you apply to top language schools, vocational colleges, and partner universities.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Visa & Embassy Support",
    description:
      "Get expert help with visa documentation, COE, embassy interview prep, and approval tracking.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Exam Registration & Guidance",
    description:
      "Register and prepare for JLPT or NAT exams with official resources and test-day guidance.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
];

export default function ServicesGrid() {
  return (
    <>
      <div className="container mx-auto px-4 py-12" id="services-container">
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={service.id} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center  gap-4 lg:gap-6 transition-all duration-700 ${
                    isEven ? "lg:flex-row-reverse " : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="flex-1 lg:px-8">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[150px] lg:h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 lg:px-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 py-8 rounded-full flex items-center justify-center font-extrabold text-7xl opacity-40">
                        {service.id}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl lg:text-2xl font-bold">
                          {service.title}
                        </div>
                        <div className="pt-2">
                          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
