import React from "react";

const steps = [
  {
    title: "Conduct Kick-Off Meeting",
    desc: "Memahami visi Anda, keunikan produk, dan ekspektasi kelas online untuk memastikan strategi yang tepat sejak awal.",
  },
  {
    title: "Market Research",
    desc: "Menganalisis pasar, tren, dan kompetitor untuk menemukan feasibility dari pengadaan kelas dan peluang terbaik bagi kelas Anda.",
  },
  {
    title: "Curriculum Design & Structuring",
    desc: "Merancang kurikulum terstruktur dan menarik agar Anda tampil sebagai expert yang dipercaya audiens.",
  },
  {
    title: "Web Development",
    desc: "Membangun landing page profesional yang memikat, memudahkan pendaftaran, dan meningkatkan kredibilitas Anda.",
  },
  {
    title: "Filming Execution & Direction",
    desc: "Merekam video dengan kualitas terbaik dan storytelling yang engaging untuk menciptakan pengalaman belajar yang berkesan.",
  },
  {
    title: "Mapping Out Sales Funnel",
    desc: "Menyusun funnel penjualan yang efektif agar promosi lebih terarah dan pendaftaran kelas Anda meningkat signifikan.",
  },
];

const StepByStepSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Step by Step <span className="text-accent-blue">InfluED</span> Mencapai Kesuksesan Bersama
          </h2>
          <p className="text-center text-black/70 text-base md:text-lg max-w-2xl mx-auto">
            "Temukan proses terstruktur yang akan membawa Anda menjadi expert di bidang Anda."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className={`rounded-xl border-2 p-6 flex flex-col gap-2 shadow-sm ${idx % 2 === 0 ? 'border-accent-blue' : 'border-primary-red'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-black bg-light-gray rounded-full w-10 h-10 flex items-center justify-center border-2 border-black">{idx + 1}.</span>
                <span className="font-bold text-base md:text-lg text-black">{step.title}</span>
              </div>
              <p className="text-black/80 text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection; 