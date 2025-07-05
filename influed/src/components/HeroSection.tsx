import React, { useState } from "react";
import ChatbotModal from "./ChatbotModal";

const HeroSection = () => {
  const [openChatbot, setOpenChatbot] = useState(false);
  return (
    <section className="bg-light-gray pt-10 pb-8 md:pt-20 md:pb-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-4">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
          Build deeper <span className="bg-primary-red text-white px-2 rounded">audience loyalty</span> and positioning as an <span className="bg-primary-red text-white px-2 rounded">expert</span>
        </h1>
        <p className="text-lg md:text-xl text-black/80 max-w-xl">
          Bangun citra diri sebagai ahli di bidang Anda dengan dukungan strategi e-learning dan pemasaran dari tim berpengalaman kami.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <button className="bg-primary-red text-white px-6 py-3 rounded font-semibold hover:bg-[#b82809] transition">Konsultasi Gratis</button>
          <button className="border border-primary-red text-primary-red px-6 py-3 rounded font-semibold hover:bg-primary-red hover:text-white transition">Portfolio &gt;</button>
          <button className="bg-accent-blue text-white px-6 py-3 rounded font-semibold ml-2 hover:bg-[#099bb2] transition" onClick={() => setOpenChatbot(true)}>
            Konsultasi Sekarang
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        {/* Placeholder image, ganti dengan gambar profesional jika ada */}
        <div className="w-[320px] h-[320px] bg-[#eaeaea] rounded-2xl flex items-center justify-center shadow-md">
          <span className="text-6xl text-accent-blue font-bold">👩‍💼👩‍💻</span>
        </div>
      </div>
      <ChatbotModal open={openChatbot} onClose={() => setOpenChatbot(false)} />
    </section>
  );
};

export default HeroSection; 