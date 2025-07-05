import React from "react";

const services = [
  {
    id: 1,
    title: "Digital Strategy & Consulting",
    description: "Comprehensive digital transformation roadmap tailored to your industry and goals",
    features: ["Market Analysis", "Competitor Research", "Strategy Development", "Implementation Roadmap"],
    icon: "🎯",
    price: "From $5,000",
    duration: "4-6 weeks",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Content Creation & Production",
    description: "Professional content creation that establishes your authority and engages your audience",
    features: ["Video Production", "Blog Writing", "Social Media Content", "Podcast Production"],
    icon: "🎬",
    price: "From $3,000",
    duration: "2-4 weeks",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Online Course Development",
    description: "Turn your expertise into profitable online courses with our end-to-end development",
    features: ["Curriculum Design", "Video Production", "Platform Setup", "Marketing Strategy"],
    icon: "📚",
    price: "From $8,000",
    duration: "8-12 weeks",
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    title: "Personal Branding",
    description: "Build a powerful personal brand that positions you as the go-to expert in your field",
    features: ["Brand Strategy", "Visual Identity", "Content Planning", "Reputation Management"],
    icon: "⭐",
    price: "From $4,000",
    duration: "6-8 weeks",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Sales Funnel Development",
    description: "Convert your audience into customers with high-converting sales funnels",
    features: ["Funnel Design", "Landing Pages", "Email Sequences", "Conversion Optimization"],
    icon: "🚀",
    price: "From $6,000",
    duration: "4-6 weeks",
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    title: "Ongoing Growth Management",
    description: "Continuous optimization and growth management for sustained success",
    features: ["Performance Monitoring", "Content Updates", "Strategy Refinement", "Growth Optimization"],
    icon: "📈",
    price: "From $2,500/mo",
    duration: "Ongoing",
    color: "from-teal-500 to-teal-600"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We deep-dive into your business, goals, and market to create a tailored strategy",
    icon: "🔍"
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Our experts craft a comprehensive plan designed to maximize your digital influence",
    icon: "📋"
  },
  {
    step: "03",
    title: "Content Creation",
    description: "We produce high-quality content that resonates with your audience and builds authority",
    icon: "✨"
  },
  {
    step: "04",
    title: "Implementation",
    description: "Launch your campaigns and content across all relevant platforms with precision",
    icon: "🚀"
  },
  {
    step: "05",
    title: "Optimization",
    description: "Continuous monitoring and optimization to ensure maximum ROI and growth",
    icon: "⚡"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-br from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-red to-accent-blue bg-clip-text text-transparent font-semibold text-lg tracking-wide">
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-custom-black leading-tight">
            Our <span className="text-primary-red">Services</span> That<br />
            Drive <span className="text-accent-blue">Results</span>
          </h1>
          <p className="text-xl text-custom-black/70 max-w-4xl mx-auto leading-relaxed mb-12">
            From strategy to execution, we provide end-to-end digital transformation services 
            that position you as an industry authority and drive measurable business growth.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-sm text-custom-black/60">Average 300%+ ROI for our clients</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-custom-black/60">See results within 90 days</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🛟</div>
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-sm text-custom-black/60">24/7 dedicated team support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-custom-black">
              Complete <span className="text-primary-red">Digital Transformation</span> Suite
            </h2>
            <p className="text-xl text-custom-black/70 max-w-3xl mx-auto">
              Everything you need to build authority, generate leads, and scale your influence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-red/20 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-custom-black mb-4 group-hover:text-primary-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-custom-black/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                      <span className="text-custom-black/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & Duration */}
                <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="text-lg font-bold text-primary-red">{service.price}</div>
                    <div className="text-xs text-custom-black/60">Starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-custom-black">{service.duration}</div>
                    <div className="text-xs text-custom-black/60">Timeline</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </button>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-red to-accent-blue group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-custom-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven <span className="text-accent-blue">Process</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A systematic approach that delivers consistent results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-red to-accent-blue transform translate-x-1/2"></div>
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary-red to-accent-blue rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-xl">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="text-3xl font-black text-primary-red mb-2">{step.step}</div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-custom-black">
              Frequently Asked <span className="text-primary-red">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most clients see initial results within 30-60 days, with significant growth typically achieved within 90 days. Our proven process ensures rapid yet sustainable growth."
              },
              {
                q: "Do you work with businesses in all industries?",
                a: "Yes, we work across all industries. Our strategies are adaptable and have proven successful in technology, healthcare, finance, education, and many other sectors."
              },
              {
                q: "What makes InfluED different from other agencies?",
                a: "Our focus on building genuine authority and expertise, combined with our data-driven approach and proven track record of 300%+ ROI for clients, sets us apart."
              },
              {
                q: "Do you provide ongoing support after project completion?",
                a: "Absolutely! We offer ongoing support packages to ensure your continued growth and optimization. Many clients choose our monthly retainer for sustained success."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-custom-black mb-3">{faq.q}</h3>
                <p className="text-custom-black/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-red to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your <span className="text-accent-blue">Digital Presence</span>?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 500+ successful clients who&apos;ve achieved remarkable growth with InfluED.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-red hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl">📞</span>
                Schedule Free Consultation
              </span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 