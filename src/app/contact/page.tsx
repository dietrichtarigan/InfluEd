import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-4">
      <section className="max-w-xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Contact</h1>
        <form className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-6 border border-light-gray">
          <input type="text" placeholder="Nama" className="px-5 py-4 rounded-lg border border-gray-300 focus:outline-accent-blue text-lg" />
          <input type="email" placeholder="Email" className="px-5 py-4 rounded-lg border border-gray-300 focus:outline-accent-blue text-lg" />
          <textarea placeholder="Pesan" rows={5} className="px-5 py-4 rounded-lg border border-gray-300 focus:outline-accent-blue text-lg" />
          <button type="submit" className="bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b82809] transition text-lg shadow">Kirim Pesan</button>
        </form>
        <div className="mt-10 flex flex-col items-center gap-2">
          <span className="text-black/70">Atau hubungi kami di:</span>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-accent-blue text-3xl hover:scale-110 transition">📧</a>
            <a href="#" className="text-accent-blue text-3xl hover:scale-110 transition">📱</a>
            <a href="#" className="text-accent-blue text-3xl hover:scale-110 transition">💼</a>
          </div>
        </div>
      </section>
    </main>
  );
} 