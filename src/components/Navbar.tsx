'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InfluEDLogo from "./InfluEDLogo";

const navLinks = [
  { name: "Home", href: "/", disabled: false },
  { name: "About Us", href: "/about", disabled: false },
  { name: "What We Do", href: "/services", disabled: true },
  { name: "Portfolio", href: "/portfolio", disabled: true },
  { name: "Contact", href: "/contact", disabled: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white shadow-sm border-b border-light-gray'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="hover:scale-105 transition-transform cursor-pointer">
            <InfluEDLogo size={45} />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.disabled ? (
              <span
                key={link.name}
                className="relative font-medium py-2 px-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
                title="Coming Soon"
              >
                {link.name}
                <span className="absolute -top-1 -right-1 bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </span>
            ) : (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative font-medium transition-all duration-300 py-2 px-3 rounded-lg group ${
                  activeLink === link.name 
                    ? 'text-primary-red bg-red-50' 
                    : 'text-custom-black hover:text-primary-red hover:bg-gray-50'
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary-red transition-all duration-300 ${
                  activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            )
          ))}
          
          {/* CTA Button */}
          <button className="group bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Konsultasi
          </button>
        </div>
        
        {/* Mobile Hamburger */}
        <button 
          className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-300 ${
            open ? 'bg-gray-100' : 'hover:bg-gray-50'
          }`}
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-custom-black rounded transition-all duration-300 ${
            open ? 'rotate-45 translate-y-2' : ''
          }`} />
          <span className={`w-6 h-0.5 bg-custom-black rounded transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`} />
          <span className={`w-6 h-0.5 bg-custom-black rounded transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg px-4 pb-4 space-y-2 border-t border-gray-200">
          {navLinks.map((link, index) => (
            link.disabled ? (
              <span
                key={link.name}
                className={`block text-gray-400 font-medium py-3 px-4 rounded-lg cursor-not-allowed opacity-50 relative transform ${
                  open ? 'translate-x-0 opacity-50' : 'translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                title="Coming Soon"
              >
                {link.name}
                <span className="absolute top-2 right-2 bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </span>
            ) : (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`block text-custom-black font-medium hover:text-primary-red hover:bg-gray-50 transition-all duration-300 py-3 px-4 rounded-lg transform ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => {setActiveLink(link.name); setOpen(false);}}
              >
                {link.name}
              </Link>
            )
          ))}
          <button className="w-full bg-gradient-to-r from-primary-red to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-4 transform hover:scale-105">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 