import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl text-accent-blue font-bold">🎓</span>
          <span className="font-bold text-xl md:text-2xl text-primary-red">InfluED</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-black font-medium hover:text-primary-red transition">
              {link.name}
            </Link>
          ))}
          <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 font-semibold hover:bg-primary-red transition">
            <span> Konsultasi </span>
            <span className="text-lg">💬</span>
          </button>
        </div>
        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="w-6 h-0.5 bg-black rounded" />
          <span className="w-6 h-0.5 bg-black rounded" />
          <span className="w-6 h-0.5 bg-black rounded" />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-black font-medium hover:text-primary-red transition py-1">
              {link.name}
            </Link>
          ))}
          <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 font-semibold hover:bg-primary-red transition">
            <span> Konsultasi </span>
            <span className="text-lg">💬</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 