import React from "react";

const team = [
  { role: "CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { role: "CMO", img: "https://randomuser.me/api/portraits/men/33.jpg" },
  { role: "CTO", img: "https://randomuser.me/api/portraits/men/34.jpg" },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Tentang Kami</h1>
        <p className="text-black/70 mb-8">Lorem Ipsum awidj uawidj skdaiowajd skda</p>
        <div className="bg-black text-white rounded-xl py-8 px-4 max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Influ<span className="text-primary-red">ED</span>: <span className="text-accent-blue">Your Partner to Strategize, Educate, and Amplify Your Digital Influence</span>
          </h2>
          <p className="text-white/90 text-base md:text-lg">
            InfluED percaya perubahan adalah peluang untuk terus belajar dan beradaptasi, dengan fleksibilitas sebagai kekuatan utama kami. Kami bekerja dengan semangat, menghadapi tantangan dengan antusiasme, dan selalu berusaha memberikan yang terbaik untuk para klien.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-left mb-10">
          <h3 className="text-accent-blue text-2xl font-bold mb-2">Influ<span className="text-primary-red">ED</span></h3>
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-1">Visi</h4>
            <p className="text-black/80">InfluED percaya perubahan adalah peluang untuk terus belajar dan beradaptasi, dengan fleksibilitas sebagai kekuatan utama kami. Kami bekerja dengan semangat,</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Misi</h4>
            <p className="text-black/80">InfluED percaya perubahan adalah peluang untuk terus belajar dan beradaptasi, dengan fleksibilitas sebagai kekuatan utama kami. Kami bekerja dengan semangat,</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {team.map((member) => (
              <div key={member.role} className="flex flex-col items-center gap-3">
                <img src={member.img} alt={member.role} className="w-40 h-40 object-cover rounded-xl shadow-md" />
                <span className="font-bold text-lg">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 