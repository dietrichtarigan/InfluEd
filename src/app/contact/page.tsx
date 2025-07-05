import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-4">
      <section className="max-w-xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h1>
        <form className="bg-light-gray rounded-xl shadow-md p-8 flex flex-col gap-5">
          <input type="text" placeholder="Nama" className="px-4 py-3 rounded border border-gray-300 focus:outline-accent-blue" />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-300 focus:outline-accent-blue" />
          <textarea placeholder="Pesan" rows={5} className="px-4 py-3 rounded border border-gray-300 focus:outline-accent-blue" />
          <button type="submit" className="bg-primary-red text-white px-6 py-3 rounded font-semibold hover:bg-[#b82809] transition">Kirim Pesan</button>
        </form>
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-black/70">Atau hubungi kami di:</span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-accent-blue text-2xl hover:scale-110 transition">📧</a>
            <a href="#" className="text-accent-blue text-2xl hover:scale-110 transition">📱</a>
            <a href="#" className="text-accent-blue text-2xl hover:scale-110 transition">💼</a>
          </div>
        </div>
      </section>
    </main>
  );
} 