import React from "react";

const testimonials = [
  {
    name: "Dr. Reza Gunawan",
    role: "Healthcare Expert & Content Creator",
    company: "Medical Influencer",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&auto=format",
    content: "InfluED membantu saya membangun personal branding sebagai dokter yang dipercaya. Dari 50K menjadi 2M followers, dan kini menjadi rujukan kesehatan nomor 1 di Indonesia.",
    rating: 5,
    metrics: { increase: "4000%", metric: "Follower Growth" }
  },
  {
    name: "Anya Geraldine",
    role: "Beauty & Lifestyle Influencer",
    company: "Beauty Creator",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
    content: "Strategy InfluED benar-benar mengubah karir saya. Engagement rate naik drastis, brand collaborations berlipat, dan sekarang punya bisnis skincare sendiri yang sukses.",
    rating: 5,
    metrics: { increase: "850%", metric: "Brand Deals" }
  },
  {
    name: "Indra Jegel",
    role: "Stand-Up Comedian & Digital Creator",
    company: "Entertainment",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    content: "Tim InfluED memahami content creation seperti tidak ada yang lain. Mereka membantu saya mengoptimalkan konten, meningkatkan monetisasi, dan membangun audience yang loyal.",
    rating: 5,
    metrics: { increase: "650%", metric: "Revenue Stream" }
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-red rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-red to-accent-blue bg-clip-text text-transparent font-semibold text-lg tracking-wide">
              SUCCESS STORIES FROM CREATORS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-custom-black leading-tight">
            Apa Kata <span className="text-primary-red">Influencer</span> & <span className="text-accent-blue">Creator</span><br />
            Tentang <span className="text-primary-red">Transformasi</span> Mereka
          </h2>
          <p className="text-xl text-custom-black/70 max-w-3xl mx-auto leading-relaxed">
            Hasil nyata dari creator dan expert terdepan. Lihat bagaimana kami membantu 
            influencer, praktisi, dan brand membangun otoritas digital dan mencapai pertumbuhan eksponensial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-red/20 transform group-hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-red to-accent-blue rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-custom-black/80 leading-relaxed text-lg italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                {/* Metrics */}
                <div className="bg-gradient-to-r from-primary-red/10 to-accent-blue/10 rounded-2xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary-red mb-1">{testimonial.metrics.increase}</div>
                    <div className="text-sm font-semibold text-custom-black/70">{testimonial.metrics.metric}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-custom-black">{testimonial.name}</h4>
                    <p className="text-custom-black/60 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                      <span className="text-xs font-semibold text-primary-red">{testimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-red to-accent-blue group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-black">1000+</div>
                <div className="text-sm text-custom-black/60">Creators Empowered</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-black">500%+</div>
                <div className="text-sm text-custom-black/60">Avg. Growth Rate</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-black">60 Hari</div>
                <div className="text-sm text-custom-black/60">Viral Content Timeline</div>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="flex items-center gap-3">
              <span className="text-xl">�</span>
              Mulai Journey Creator Success Kamu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
