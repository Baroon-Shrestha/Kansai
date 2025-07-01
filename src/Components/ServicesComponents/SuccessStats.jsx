import { BadgePercent, Handshake, Users } from "lucide-react";
import React from "react";

const stats = [
  { label: "Students Sent to Japan", value: "1500+", icons: <Users /> },
  { label: "Visa Approval Rate", value: "98%", icons: <Handshake /> },
  { label: "Years of Experience", value: "15+", icons: <BadgePercent /> },
  { label: "Affiliated Institutions", value: "25+", icons: <Handshake /> },
];

console.log(stats.label);
export default function SuccessStats() {
  return (
    <>
      <section className="container mx-auto my-12">
        <div className=" bg-gray-100 py-8 rounded-4xl">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-3 shadow">
                <div className="text-gray-400">{stat.icons}</div>
                <div className="text-3xl font-bold ">{stat.value}</div>
                <p className=" mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
