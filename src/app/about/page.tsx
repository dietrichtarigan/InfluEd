import React from "react";
import InfluEDLogo from "@/components/InfluEDLogo";

const team = [
  { 
    role: "CEO", 
    name: "Sarah Johnson",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&auto=format",
    description: "Visionary leader dengan 10+ tahun pengalaman di digital marketing"
  },
  { 
    role: "CMO", 
    name: "Michael Chen",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
    description: "Expert dalam strategi konten dan personal branding"
  },
  { 
    role: "CTO", 
    name: "David Rodriguez",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&auto=format",
    description: "Tech innovator yang membangun platform digital terdepan"
  },
];

const values = [
  {
    icon: "🎯",
    title: "Innovation",
    desc: "Kami selalu mencari cara baru dan kreatif untuk membantu klien mencapai tujuan mereka."
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "Kami membangun hubungan jangka panjang berdasarkan kepercayaan dan hasil yang nyata."
  },
  {
    icon: "📈",
    title: "Excellence",
    desc: "Setiap proyek dikerjakan dengan standar kualitas tinggi dan perhatian detail."
  },
  {
    icon: "🚀",
    title: "Growth",
    desc: "Fokus utama kami adalah pertumbuhan berkelanjutan untuk semua pihak yang terlibat."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center bg-gradient-to-br from-light-gray via-white to-light-gray overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-red rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-blue rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-custom-black rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-red to-accent-blue bg-clip-text text-transparent font-semibold text-lg tracking-wide">
              TENTANG KAMI
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-custom-black leading-tight">
            Membangun <span className="text-primary-red">Digital Influence</span><br />
            yang <span className="text-accent-blue">Berkelanjutan</span>
          </h1>
          <p className="text-custom-black/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Kami adalah tim ahli yang berdedikasi membantu profesional dan bisnis 
            membangun kehadiran digital yang kuat dan otentik.
          </p>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Tagline */}
          <div className="bg-gradient-to-r from-custom-black to-gray-800 text-white rounded-3xl py-16 px-8 mb-20 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary-red rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-blue rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-accent-blue">Influ</span><span className="text-primary-red">ED</span>: Your Partner to Strategize, Educate,<br />
                and Amplify Your Digital <span className="text-accent-blue">Influence</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
                InfluED percaya perubahan adalah peluang untuk terus belajar dan beradaptasi, 
                dengan fleksibilitas sebagai kekuatan utama kami. Kami bekerja dengan semangat, 
                menghadapi tantangan dengan antusiasme, dan selalu berusaha memberikan yang 
                terbaik untuk para klien.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-custom-black">Our Core Values</h3>
              <p className="text-custom-black/70 text-lg max-w-2xl mx-auto">
                Nilai-nilai yang memandu setiap langkah perjalanan kami
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-red/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-accent-blue rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-custom-black group-hover:text-primary-red transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-custom-black/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg">
              <div className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center text-3xl mb-8 mx-auto">
                👁️
              </div>
              <h3 className="text-3xl font-bold mb-6 text-custom-black">Visi</h3>
              <p className="text-custom-black/70 text-lg leading-relaxed">
                Menjadi partner terdepan dalam membangun ekosistem digital yang memberdayakan 
                setiap individu untuk mencapai potensi maksimal mereka sebagai thought leader 
                dan expert di bidang masing-masing.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-lg">
              <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center text-3xl mb-8 mx-auto">
                🎯
              </div>
              <h3 className="text-3xl font-bold mb-6 text-custom-black">Misi</h3>
              <p className="text-custom-black/70 text-lg leading-relaxed">
                Menyediakan solusi terintegrasi mulai dari strategi konten, pengembangan platform, 
                hingga eksekusi kampanye yang membantu klien membangun personal brand yang autentik 
                dan sustainable.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-custom-black">Meet Our Expert Team</h3>
            <p className="text-custom-black/70 text-lg mb-16 max-w-2xl mx-auto">
              Tim profesional berpengalaman yang siap membantu mewujudkan visi digital Anda
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
              {team.map((member) => (
                <div key={member.role} className="group text-center">
                  {/* Image Container */}
                  <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary-red/20">
                    <h4 className="text-2xl font-bold text-custom-black mb-2">{member.name}</h4>
                    <div className="text-primary-red font-semibold mb-4">{member.role}</div>
                    <p className="text-custom-black/70 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-gradient-to-br from-custom-black via-gray-900 to-custom-black text-white py-20 px-4 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Scale-Up your <span className="text-accent-blue">influence</span> with Us!
          </h2>
          <p className="text-xl md:text-2xl mb-12">
            Maximize your personal brand as an{" "}
            <span className="bg-primary-red px-4 py-2 rounded-lg font-bold inline-block transform -rotate-1">
              EXPERT!
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-primary-red hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Konsultasi Sekarang
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-custom-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-red to-accent-blue rounded-full blur-lg opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 inline-block">
              <InfluEDLogo size={60} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 