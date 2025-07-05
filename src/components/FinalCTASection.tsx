import React from "react";
import InfluEDLogo from "./InfluEDLogo";

const FinalCTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-custom-black via-gray-900 to-custom-black text-white py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-accent-blue rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-16 w-2 h-2 bg-primary-red rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse delay-2000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-gradient-to-r from-primary-red to-accent-blue px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            READY TO TRANSFORM?
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Scale-Up your <span className="relative">
            <span className="text-accent-blue">influence</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-transparent"></div>
          </span> with Us!
        </h2>
        
        <p className="text-xl md:text-3xl mb-12 text-gray-300 leading-relaxed">
          Maximize your personal brand as an{" "}
          <span className="relative inline-block">
            <span className="bg-primary-red px-4 py-2 rounded-lg font-bold text-white transform -rotate-1 inline-block">
              EXPERT!
            </span>
          </span>
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">500+</div>
            <div className="text-gray-400">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-red mb-2">95%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Expert Support</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-primary-red hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Konsultasi Sekarang
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-custom-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
            Lihat Portfolio
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>hello@influed.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-red to-accent-blue rounded-full blur-lg opacity-30"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 inline-block">
            <InfluEDLogo size={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 