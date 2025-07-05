import React from "react";

const steps = [
  {
    title: "Conduct Kick-Off Meeting",
    desc: "Memahami visi Anda, keunikan produk, dan ekspektasi kelas online untuk memastikan strategi yang tepat sejak awal.",
    color: "border-primary-red bg-red-50", 
    iconBg: "bg-primary-red",
    icon: "🎯"
  },
  {
    title: "Market Research", 
    desc: "Menganalisis pasar, tren, dan kompetitor untuk menemukan feasibility dari pengadaan kelas dan peluang terbaik bagi kelas Anda.",
    color: "border-custom-black bg-gray-50", 
    iconBg: "bg-custom-black",
    icon: "📊"
  },
  {
    title: "Curriculum Design & Structuring",
    desc: "Merancang kurikulum terstruktur dan menarik agar Anda tampil sebagai expert yang dipercaya audiens.",
    color: "border-primary-red bg-red-50", 
    iconBg: "bg-primary-red",
    icon: "📚"
  },
  {
    title: "Web Development",
    desc: "Membangun landing page profesional yang memikat, memudahkan pendaftaran, dan meningkatkan kredibilitas Anda.",
    color: "border-accent-blue bg-blue-50", 
    iconBg: "bg-accent-blue",
    icon: "💻"
  },
  {
    title: "Filming Execution & Direction", 
    desc: "Merekam video dengan kualitas terbaik dan storytelling yang engaging untuk menciptakan pengalaman belajar yang berkesan.",
    color: "border-primary-red bg-red-50", 
    iconBg: "bg-primary-red",
    icon: "🎬"
  },
  {
    title: "Mapping Out Sales Funnel",
    desc: "Menyusun funnel penjualan yang efektif agar promosi lebih terarah dan pendaftaran kelas Anda meningkat signifikan.",
    color: "border-custom-black bg-gray-50", 
    iconBg: "bg-custom-black",
    icon: "🚀"
  },
];

const StepByStepSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-light-gray via-white to-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-red rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-blue rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-custom-black rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header dengan warna spesifik untuk InfluED */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-red to-accent-blue bg-clip-text text-transparent font-semibold text-lg tracking-wide">
              PROSES KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-custom-black leading-tight">
            Step by Step <span className="text-accent-blue">Influ</span><span className="text-primary-red">ED</span> Mencapai<br />
            <span className="text-primary-red">Kesuksesan</span> Bersama
          </h2>
          <p className="text-custom-black/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Temukan proses terstruktur yang akan membawa Anda menjadi expert di bidang Anda dengan metodologi yang terbukti efektif.
          </p>
        </div>
        
        {/* 6 kartu proses dengan layout yang lebih menarik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={step.title} 
              className={`group relative bg-white rounded-2xl border-2 ${step.color} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6">
                <div className={`w-12 h-12 ${step.iconBg} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
                  {idx + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-end mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="font-bold text-xl text-custom-black mb-4 group-hover:text-primary-red transition-colors">
                  {step.title}
                </h3>
                <p className="text-custom-black/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Hover Effect Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-custom-black/60 text-lg mb-6">
            Siap memulai perjalanan menuju kesuksesan bersama kami?
          </p>
          <button className="bg-primary-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Mulai Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection; 