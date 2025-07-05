import React from "react";

const FinalCTASection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 mt-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Scale-Up your <span className="text-accent-blue">influence</span> with Us!
        </h2>
        <p className="text-center text-lg md:text-xl">
          Maximize your personal brand as an <span className="text-accent-blue font-bold">EXPERT!</span>
        </p>
        <button className="bg-primary-red px-8 py-3 rounded font-semibold text-white hover:bg-[#b82809] transition">Konsultasi Sekarang</button>
        <div className="mt-4">
          {/* Logo InfluED placeholder */}
          <span className="text-4xl md:text-5xl">🎓</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 