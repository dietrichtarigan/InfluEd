import React from "react";

const expertise = [
  {
    title: "Market Research",
    desc: "Kami menganalisis tren, kebutuhan, dan kompetitor untuk memastikan strategi kelas online Anda tepat sasaran dan memiliki keunikan di pasar.",
  },
  {
    title: "Curriculum Planner",
    desc: "Kami membantu menyusun kurikulum yang terstruktur, relevan, dan menarik agar materi Anda mudah dipahami serta meningkatkan kredibilitas sebagai expert.",
  },
  {
    title: "Video Director",
    desc: "Kami mengarahkan produksi video dengan konsep visual dan storytelling yang engaging untuk menyampaikan materi Anda secara efektif dan profesional.",
  },
  {
    title: "Funneling Planning Strategy",
    desc: "Kami merancang strategi funnel yang tepat untuk membawa audiens dari tahap awareness hingga conversion, sehingga pendaftaran kelas Anda meningkat signifikan.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-red/90 to-accent-blue/80 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 relative">
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-primary-red text-white font-bold text-2xl py-6 px-4 rounded-r-xl rotate-[-90deg] hidden md:block" style={{writingMode:'vertical-rl',textOrientation:'mixed'}}>Our Expertise!</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item) => (
            <div key={item.title} className="bg-light-gray rounded-lg p-6 shadow-md flex flex-col gap-2">
              <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
              <p className="text-black/80 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 