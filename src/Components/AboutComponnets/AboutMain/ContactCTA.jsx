import React from "react";
import { PhoneCall, Send } from "lucide-react";
import { Link } from "react-router-dom"; // optional: replace with <a> if not using React Router

export default function ContactCTA() {
  return (
    <section className=" max-w-5xl mx-auto">
      <div className="mb-20 py-8 mx-4 px-2 bg-[#701919] text-white rounded-4xl shadow-2xl">
        <div className=" container mx-auto text-center">
          {/* Header */}
          <h2 className="text-2xl sm:text-2xl font-extrabold mb-4">
            Ready to Learn Japanese Langauge?
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-lg font-extralight max-w-3xl mx-auto mb-8">
            Let our experienced counselors guide you from language training to
            visa processing and job placement. Book a free counseling session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <div className="inline-flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-[#701919] transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl text-lg">
                <PhoneCall size={20} />
                Get In Touch Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
