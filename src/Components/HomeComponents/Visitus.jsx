import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  Users,
  AlertCircle,
  CheckCircle,
  ArrowDown,
  Building,
} from "lucide-react";

export default function Visitus() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCallClick = () => {
    const phoneNumber = "+977-98XXXXXXXX";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setSubmitStatus({
          type: "success",
          message: "Phone number copied to clipboard!",
        });
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .catch(() => {
        setSubmitStatus({
          type: "error",
          message: "Failed to copy phone number.",
        });
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  const handleEmailClick = () => {
    window.open("mailto:baroonshrestha4@gmail.com", "_self");
  };

  const handleDirectionsClick = () => {
    window.open(
      "https://maps.google.com/?q=SamaKhusi-10,Kathmandu,Nepal",
      "_blank"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen mx-6 mb-20 rounded-4xl pb-1">
      {submitStatus && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg flex items-center gap-2 ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="font-medium">{submitStatus.message}</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#701919] via-[#8B2635] to-[#D1863C] rounded-t-4xl mx-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MessageCircle className="text-white" size={20} />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Let's Connect
          </h1>
          <p className="text-lg font-extralight text-white/90 max-w-2xl mx-auto">
            Ready to start your educational journey? We're here to help you
            every step of the way.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF8F0] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 -mt-4 relative z-10">
        {/* Quick Contact Cards - Moved up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Ready to answer your questions</p>
            <button
              onClick={handleCallClick}
              className="text-[#701919] hover:text-[#D1863C] font-semibold transition-colors duration-200"
            >
              +977-98XXXXXXXX
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Drop us a message anytime</p>
            <button
              onClick={handleEmailClick}
              className="text-[#701919] hover:text-[#D1863C] font-semibold transition-colors duration-200"
            >
              info@kansaiedu.com
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-[#701919] to-[#D1863C] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">Come see us in person</p>
            <button
              onClick={handleDirectionsClick}
              className="text-[#701919] hover:text-[#D1863C] font-semibold transition-colors duration-200 flex items-center gap-1"
            >
              BagBazar, Kathmandu
              <Navigation size={16} />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl text-left grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}

          <div className="space-y-8">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#701919] to-[#D1863C] rounded-3xl text-white shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Office Information</h2>
                    <p className="text-white/80">Visit us during these hours</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <MapPin className="text-white " size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-left">
                        Our Address
                      </h3>
                      <p className="text-white/90 text-lg">
                        BagBazar, Kathmandu, Nepal
                      </p>
                      <p className="text-white/70 text-sm mt-1">
                        Easy access by public transport
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-left">
                        Office Hours
                      </h3>
                      <div className="space-y-3 text-white/90">
                        <div className="flex justify-between items-center p-2 bg-white/10 rounded-lg">
                          <span>Sunday - Friday:</span>
                          <span className="font-semibold">
                            9:00 AM - 6:00 PM
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white/10 rounded-lg">
                          <span>Saturday:</span>
                          <span className="font-semibold text-red-700 bg-white px-3 py-1 rounded-md text-sm">
                            Closed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h3 className="font-bold text-lg mb-4 text-left">
                    Ready to Visit Us?
                  </h3>
                  <button
                    onClick={handleDirectionsClick}
                    className="w-full bg-white text-[#701919] font-bold py-4 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Navigation size={20} />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-xl h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.2585084732984!2d85.31832607491594!3d27.735762175431017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bbcdc2e83b%3A0x5e2236bb8d5f5b5!2sMomiji%20Academy!5e0!3m2!1sen!2snp!4v1750137174540!5m2!1sen!2snp"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>

            <div className="absolute bottom-4 right-4 z-10">
              <button
                onClick={handleDirectionsClick}
                className="bg-white hover:bg-gray-50 text-[#701919] font-semibold py-2 px-4 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Navigation size={16} />
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
