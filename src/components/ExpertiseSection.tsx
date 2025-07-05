import React from "react";

const expertise = [
  {
    title: "Market Research",
    desc: "Kami menganalisis tren, kebutuhan, dan kompetitor untuk memastikan strategi kelas online Anda tepat sasaran dan memiliki keunikan di pasar.",
    icon: "📊"
  },
  {
    title: "Curriculum Planner", 
    desc: "Kami membantu menyusun kurikulum yang terstruktur, relevan, dan menarik agar materi Anda mudah dipahami serta meningkatkan kredibilitas sebagai expert.",
    icon: "📚"
  },
  {
    title: "Video Director",
    desc: "Kami mengarahkan produksi video dengan konsep visual dan storytelling yang engaging untuk menyampaikan materi Anda secara efektif dan profesional.",
    icon: "🎬"
  },
  {
    title: "Funneling Planning Strategy",
    desc: "Kami merancang strategi funnel yang tepat untuk membawa audiens dari tahap awareness hingga conversion, sehingga pendaftaran kelas Anda meningkat signifikan.",
    icon: "🎯"
  },
];

const ExpertiseSection = () => {
  return (
    <section className="relative bg-primary-red py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Label Vertikal: Our Expertise! */}
          <div className="lg:flex-shrink-0">
            <div className="lg:block hidden">
              <div 
                className="bg-white/10 backdrop-blur-sm text-white font-bold text-3xl py-16 px-8 rounded-2xl shadow-2xl border border-white/20"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  height: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                OUR EXPERTISE!
              </div>
            </div>
            
            {/* Mobile version */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                OUR EXPERTISE!
              </h2>
            </div>
          </div>
          
          {/* Cards Container */}
          <div className="flex-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expertise.map((item) => (
                  <div key={item.title} className="group relative">
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary-red/20 group-hover:-translate-y-1">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          {/* Icon Circle */}
                          <div className="w-14 h-14 bg-custom-black rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary-red transition-colors duration-300">
                            <span className="text-white text-xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-custom-black mb-3 group-hover:text-primary-red transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-custom-black/70 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-red group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 