import React from "react";

const details = [
  {
    title: "Language Training (JLPT N5–N2)",
    points: [
      "Native and certified trainers",
      "Flexible batch timing",
      "Mock tests and exam prep",
    ],
  },
  {
    title: "Visa & Documentation",
    points: [
      "Complete checklist & SOP writing",
      "Mock interviews for embassy prep",
      "100% transparency in the process",
    ],
  },
  {
    title: "Job & Work Placement",
    points: [
      "Resume creation (Japanese format)",
      "Part-time job guidance post-arrival",
      "Career workshops and tips",
    ],
  },
];

export default function DetailedServiceBreakdown() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="container mx-auto space-y-10">
        {details.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-[#701919] mb-4">
              {item.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
