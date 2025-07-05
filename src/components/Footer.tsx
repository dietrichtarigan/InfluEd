import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl text-accent-blue font-bold">🎓</span>
          <span className="font-bold text-xl md:text-2xl text-primary-red">InfluED</span>
        </div>
        <div className="text-center md:text-right text-white/80 text-sm">
          &copy; {new Date().getFullYear()} InfluED. All rights reserved.
        </div>
        <div>
          <button className="bg-primary-red px-5 py-2 rounded font-semibold text-white hover:bg-[#b82809] transition text-sm">Konsultasi Sekarang</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 