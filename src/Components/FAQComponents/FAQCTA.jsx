import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // Optional: If using Lucide for icons

export default function FAQCTA() {
  return (
    <section className="bg-gradient-to-r from-[#701919] to-[#D1863C] text-white py-12 px-6 rounded-3xl shadow-2xl text-center max-w-5xl mx-6 md:mx-auto mt-16">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        📞 Let's Get in Touch
      </h2>
      <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
        We're here to support your journey to Japan. Whether you need guidance,
        have questions, or want to visit us in person — we're just a call or
        message away.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm sm:text-base">
        <div className="flex items-start gap-4 md:justify-start">
          <div className="bg-white bg-opacity-10 p-3 rounded-xl">
            <Phone className="w-6 h-6 text-green-300" />
          </div>
          <div>
            <p className="text-gray-200 font-semibold mb-1">Phone</p>
            <a href="tel:+9779812345678" className="text-g hover:underline">
              +977-9812345678
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 md:justify-start">
          <div className="bg-white bg-opacity-10 p-3 rounded-xl">
            <Mail className="w-6 h-6 text-blue-300" />
          </div>
          <div>
            <p className="text-gray-200 font-semibold mb-1">Email</p>
            <a
              href="mailto:info@yourconsultancy.com"
              className="text-ble-400 hover:underline"
            >
              info@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 cener md:justify-start">
          <div className="bg-white bg-opacity-10 p-3 rounded-xl">
            <MapPin className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <p className="text-gray-200 font-semibold mb-1">Location</p>
            <p className="text-gray-100">Putalisadak, Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
