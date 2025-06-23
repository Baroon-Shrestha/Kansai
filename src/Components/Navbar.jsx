import {
  Home,
  Users,
  Menu,
  X,
  ChevronDown,
  Settings,
  Image,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/services", label: "Services", icon: Settings },
    { path: "/gallery", label: "Gallery", icon: Image },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-amber-900/95 backdrop-blur-md shadow-xl border-b border-amber-700/30"
            : "bg-amber-900 shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="group relative z-10 focus:outline-none">
              <div className="relative">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 w-14 rounded-full border-3 border-amber-600 shadow-lg 
                           transition-all duration-300 group-hover:border-amber-400 
                           group-hover:shadow-amber-400/30 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-600/20 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ease-out focus:outline-none ${
                      isActive
                        ? "bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-lg shadow-amber-700/30"
                        : "text-amber-100 hover:text-white hover:bg-amber-800/70"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-amber-800/50 
                         flex items-center justify-center transition-all duration-300
                         hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 text-amber-100 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 text-amber-100 transition-all duration-300 ${
                    isMenuOpen ? "opacity-100" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-amber-900 via-amber-900 to-amber-800 shadow-2xl border-t border-amber-700/30 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }, index) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `group w-full flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ease-out transform hover:translate-x-2 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-lg"
                        : "text-amber-100 hover:text-white hover:bg-amber-800/50"
                    }`
                  }
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-lg">{label}</span>
                  <ChevronDown className="w-4 h-4 ml-auto opacity-30 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
