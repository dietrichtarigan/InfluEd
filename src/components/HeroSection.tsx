'use client';
import React, { useState } from "react";
import ChatbotModal from "./ChatbotModal";

const HeroSection = () => {
  const [openChatbot, setOpenChatbot] = useState(false);
  
  const partnerLogos = [
    { name: "Microsoft", logo: "MS", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { name: "Google", logo: "G", color: "text-red-500", bg: "bg-red-50", border: "border-red-200" },
    { name: "Meta", logo: "M", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
    { name: "Amazon", logo: "A", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
    { name: "Tesla", logo: "T", color: "text-gray-800", bg: "bg-gray-50", border: "border-gray-200" },
    { name: "Shopify", logo: "S", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" }
  ];



  const certifications = [
    { name: "Google Partner", badge: "🏆" },
    { name: "Meta Certified", badge: "✅" },
    { name: "ISO 27001", badge: "🔒" },
    { name: "HubSpot Elite", badge: "⭐" }
  ];

  const achievements = [
    { number: "1,200+", label: "Success Stories", icon: "🚀" },
    { number: "98%", label: "Client Retention", icon: "⭐" },
    { number: "150M+", label: "Digital Reach", icon: "📈" },
    { number: "24/7", label: "Expert Support", icon: "🛟" }
  ];

  return (
    <section className="relative bg-white pt-20 pb-32">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gray-50/20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Clean Premium Badge */}
            <div className="inline-block">
              <div className="bg-red-500 px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-bold text-white tracking-wide">
                    🏆 VERIFIED PREMIUM AGENCY
                  </span>
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Headline - Clean Version */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">
              Build deeper{" "}
              <span className="relative inline-block">
                <span className="bg-red-500 text-white px-6 py-3 rounded-2xl font-black shadow-lg transform -rotate-2 inline-block">
                  audience loyalty
                </span>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
              </span>{" "}
              and positioning as<br />
              an{" "}
              <span className="relative inline-block">
                <span className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-black shadow-lg transform rotate-2 inline-block">
                  expert
                </span>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full"></div>
              </span>
            </h1>

            {/* Clean Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 max-w-xl leading-relaxed font-medium">
                Bangun citra diri sebagai ahli di bidang Anda dengan dukungan strategi e-learning dan 
                pemasaran dari tim berpengalaman kami yang telah membantu <span className="font-bold text-red-600">1,200+ klien</span> mencapai kesuksesan digital.
              </p>
              
              {/* Simple Value Proposition */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ROI 400%+ Guaranteed
                </div>
                <div className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Results in 60 Days
                </div>
                <div className="bg-purple-100 border border-purple-300 text-purple-800 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Money-back Guarantee
                </div>
              </div>

              {/* Simple Industry Recognition */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-1">
                    {certifications.map((cert, i) => (
                      <div key={i} className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs shadow-sm">
                        {cert.badge}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Industry Certified</div>
                    <div className="text-xs text-gray-600">Google, Meta, HubSpot Partner</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-red-300 transform group-hover:-translate-y-2">
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean CTA Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-2xl">🚀</span>
                    <div className="text-left">
                      <div>Konsultasi Gratis</div>
                      <div className="text-xs font-normal opacity-90">Dijamin 100% Free</div>
                    </div>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button className="group border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-6 rounded-2xl font-black text-lg transition-all duration-300 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-xl">📊</span>
                    <div className="text-left">
                      <div>Case Studies</div>
                      <div className="text-xs font-normal opacity-70">Real Results</div>
                    </div>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Support</span>
                </div>
              </div>
            </div>

            {/* Clean Trust Indicators */}
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-14 h-14 bg-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-14 h-14 bg-white border-4 border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-900 font-bold text-xs">
                    +1K
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-black text-gray-900 flex items-center gap-2">
                    1,200+ CEOs & Founders
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-600">trust InfluED for their digital transformation</div>
                </div>
              </div>
              
              {/* Clean Partner Logos */}
              <div className="space-y-4">
                <p className="text-xs text-gray-600 font-bold tracking-wider uppercase">TRUSTED BY LEADING COMPANIES</p>
                <div className="grid grid-cols-3 gap-3">
                  {partnerLogos.map((logo, index) => (
                    <div key={index} className={`group flex items-center gap-3 px-4 py-3 ${logo.bg} rounded-xl border-2 ${logo.border} hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}>
                      <div className={`w-8 h-8 ${logo.color} bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center font-black text-xs shadow-sm`}>
                        {logo.logo}
                      </div>
                      <span className={`${logo.color} font-black text-xs`}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Testimonial */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">5.0 Average Rating</span>
                  </div>
                  <blockquote className="text-gray-700 font-medium italic">
                    &ldquo;InfluED transformed our digital presence completely. ROI increased 350% in just 3 months!&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      SC
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">Sarah Chen</div>
                      <div className="text-xs text-gray-600">CEO, TechStart Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Enhanced Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Professional Image Container */}
              <div className="relative w-[480px] h-[640px] bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200">
                {/* Professional Team Image */}
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=480&h=640&fit=crop&auto=format" 
                  alt="Professional team meeting with digital strategy dashboard" 
                  className="w-full h-full object-cover"
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Premium Brand Badge */}
                <div className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-bold text-gray-900">VERIFIED AGENCY</span>
                  </div>
                </div>

                {/* Social Media Icons - Clean */}
                <div className="absolute top-8 right-8 w-18 h-18 bg-purple-500 rounded-3xl flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                {/* LinkedIn Clean Badge */}
                <div className="absolute top-32 right-8 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>

                {/* YouTube Play Button */}
                <div className="absolute bottom-36 left-8 w-18 h-18 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>

                {/* Clean Engagement Stats */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                  <div className="text-center space-y-3">
                    <div className="text-4xl font-black text-red-600">425%</div>
                    <div className="text-xs text-gray-900 font-bold uppercase tracking-wide">Engagement Boost</div>
                    <div className="flex gap-1 justify-center">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-2 h-6 bg-red-600 rounded-full"></div>
                      ))}
                    </div>
                    <div className="text-xs text-green-600 font-bold">↗ +127% This Month</div>
                  </div>
                </div>

                {/* Clean Revenue Card */}
                <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">$5.2M+</div>
                      <div className="text-xs text-gray-700 font-bold">Revenue Generated</div>
                      <div className="text-xs text-green-600 font-bold">+340% Growth</div>
                    </div>
                  </div>
                </div>

                {/* Client Count Badge */}
                <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-gray-200">
                  <div className="text-center">
                    <div className="text-xl font-black text-blue-600">1,200+</div>
                    <div className="text-xs text-gray-700 font-bold">Happy Clients</div>
                  </div>
                </div>

                {/* Live Stream Indicator */}
                <div className="absolute top-1/3 right-0 transform translate-x-1/2 bg-red-500 rounded-full px-4 py-2 shadow-lg border-2 border-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white text-xs font-black">LIVE SUCCESS</span>
                  </div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-yellow-400 rounded-full p-3 shadow-lg border-4 border-white">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* Clean Background Decorations */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-100 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-24 h-24 bg-purple-100 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-6 w-20 h-20 bg-green-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <ChatbotModal open={openChatbot} onClose={() => setOpenChatbot(false)} />
    </section>
  );
};

export default HeroSection; 