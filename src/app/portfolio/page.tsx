import React from "react";

const portfolio = [
  { title: "Online Course Branding", img: "https://source.unsplash.com/400x300/?presentation,branding", type: "image" },
  { title: "Video Learning Series", img: "https://source.unsplash.com/400x300/?video,studio", type: "image" },
  { title: "Curriculum Design", img: "https://source.unsplash.com/400x300/?curriculum,education", type: "image" },
  { title: "Sales Funnel Campaign", img: "https://source.unsplash.com/400x300/?marketing,funnel", type: "image" },
  { title: "Webinar Production", img: "https://source.unsplash.com/400x300/?webinar,online", type: "image" },
  { title: "Brand Awareness Video", img: "https://source.unsplash.com/400x300/?brand,video", type: "image" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-4">
      <section className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolio.map((item, idx) => (
            <div key={idx} className="group bg-light-gray rounded-xl overflow-hidden shadow-md hover:shadow-xl transition relative">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                <button className="bg-primary-red text-white px-4 py-2 rounded font-semibold hover:bg-[#b82809] transition">Request Project</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 