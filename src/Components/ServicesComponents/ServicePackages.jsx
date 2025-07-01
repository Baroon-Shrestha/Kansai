import React from "react";

const packages = [
  {
    name: "Starter",
    price: "Free",
    features: ["1:1 Counseling", "Course Outline", "Intro Session"],
  },
  {
    name: "Standard",
    price: "Rs. 15,000",
    features: ["JLPT N5–N4", "Visa Support", "Documentation Help"],
  },
  {
    name: "Premium",
    price: "Rs. 30,000",
    features: [
      "Full JLPT (N5–N2)",
      "Interview Prep",
      "Pre/Post Arrival Support",
    ],
  },
];

export default function ServicePackages() {
  return (
    <section className="py-16 bg-[#fefefe] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#701919] mb-10">
          Service Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 border hover:border-[#D1863C] transition"
            >
              <h3 className="text-xl font-bold mb-2 text-[#701919]">
                {pkg.name}
              </h3>
              <p className="text-2xl font-semibold text-[#D1863C] mb-4">
                {pkg.price}
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
