import React from "react";
import {
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo.png";
export default function Footer() {
  const handleCallClick = () => {
    window.open("tel:+977-98XXXXXXXX", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:baroonshrestha4@gmail.com", "_self");
  };

  const handleSocialClick = (platform) => {
    // Add your social media URLs here
    const urls = {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quick CTA Section */}
        <div className="relative -top-12 mb-8 ">
          <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-xl sm:text-2xl mb-2">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-amber-100 opacity-90 text-sm sm:text-base max-w-md">
                  Connect with us today and take the first step towards
                  mastering Japanese at Kansai International Japanese Language
                  Center.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <button
                  onClick={handleCallClick}
                  className="bg-white text-red-800 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </button>
                <button
                  onClick={handleEmailClick}
                  className="bg-red-800 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-red-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg border border-white/20 flex items-center gap-2"
                >
                  <Mail size={16} />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                <div>
                  <img src={logo} alt="" className="rounded-full h-[50px]" />
                </div>
                <div className="flex flex-col items-start">
                  Kansai International
                  <span className=" ">Japanese Language Center</span>
                </div>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates animi neque deleniti numquam dolore molestias, est
                dolores. Minus, nulla et.
              </p>

              {/* Social Media */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleSocialClick("facebook")}
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Facebook size={18} className="text-white" />
                </button>
                <button
                  onClick={() => handleSocialClick("instagram")}
                  className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Instagram size={18} className="text-white" />
                </button>
                <button
                  onClick={() => handleSocialClick("twitter")}
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Twitter size={18} className="text-white" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["About Us", "Services", "Preparation", "Gallery"].map(
                  (link) => (
                    <li key={link}>
                      <button className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-left group flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link}
                      </button>
                    </li>
                  )
                )}
                ``
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-red-800 transition-colors duration-300">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us</p>
                    <p className="text-white font-medium">+977 98XXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-red-800 transition-colors duration-300">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <p className="text-white font-medium">info@kansaiedu.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-red-800 transition-colors duration-300">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit us</p>
                    <p className="text-white font-medium">
                      Bag Bazar, Kathmandu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Kansai International Japanese Language Center. All rights
              reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
