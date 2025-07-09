import React from "react";
import image from "../../../assets/Images/school.jpg";

const AimsData = [
  {
    id: 1,
    title: "Our Aims",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deleniti commodi non impedit adipisci, aspernatur, cumque, debitis molestias facilis labore dolores aut consequatur placeat vel sit architecto molestiae rem. Porro quas ipsum illum fuga reprehenderit inventore velit sunt ab culpa. Excepturi in mollitia eaque magnam a incidunt nostrum amet perferendis nam, corporis ipsam, temporibus laboriosam nulla consequatur sit alias laudantium totam vero officia, sed quos odit! Velit provident cum tenetur molestias dolorum impedit. Dolorem provident voluptatem corrupti dicta illum odit ullam unde praesentium cupiditate omnis suscipit id quae sequi, at est voluptatum assumenda nihil? Distinctio necessitatibus dolore itaque eos sunt.",
    image: image,
  },
  {
    id: 2,
    title: "Our Objectives",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deleniti commodi non impedit adipisci, aspernatur, cumque, debitis molestias facilis labore dolores aut consequatur placeat vel sit architecto molestiae rem. Porro quas ipsum illum fuga reprehenderit inventore velit sunt ab culpa. Excepturi in mollitia eaque magnam a incidunt nostrum amet perferendis nam, corporis ipsam, temporibus laboriosam nulla consequatur sit alias laudantium totam vero officia, sed quos odit! Velit provident cum tenetur molestias dolorum impedit. Dolorem provident voluptatem corrupti dicta illum odit ullam unde praesentium cupiditate omnis suscipit id quae sequi, at est voluptatum assumenda nihil? Distinctio necessitatibus dolore itaque eos sunt.",
    image: image,
  },
];

export default function Aims() {
  return (
    <>
      <div className="bg-[#FFF8F0]">
        <div className="container mx-auto py-10 space-y-10">
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-[#701919]">
            Our Aim
            <div className="bg-[#D1863C] mt-2 w-12 sm:w-16 md:w-20 h-1 rounded-full"></div>
          </div>
          <div className="text-center font-extrabold text-4xl">
            Our Aims & Objectives
          </div>
          {AimsData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row ${
                item.id % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Text */}
              <div className="lg:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-700 text-justify">{item.description}</p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 px-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-auto object-cover shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
