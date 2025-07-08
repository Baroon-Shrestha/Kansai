import React from "react";

export default function FAQCTA() {
  return (
    <section className="bg-gray-900 text-white py-10 px-6 rounded-2xl shadow-xl text-center max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        📞 Contact or Visit Us
      </h2>
      <p className="mb-6 text-gray-300">
        We’re here to help you start your journey to Japan. Reach out anytime!
      </p>

      <div className="space-y-2 text-lg">
        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+9779812345678"
            className="text-green-400 hover:underline"
          >
            +977-9812345678
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@yourconsultancy.com"
            className="text-blue-400 hover:underline"
          >
            info@yourconsultancy.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Putalisadak, Kathmandu, Nepal
        </p>
      </div>

      <a
        href="https://wa.me/9779812345678"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-lg font-medium transition duration-300">
          Chat with Us on WhatsApp
        </button>
      </a>
    </section>
  );
}
