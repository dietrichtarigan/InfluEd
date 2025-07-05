'use client';
import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "TechStartup Transformation",
    client: "TechStartup Inc.",
    industry: "Technology",
    challenge: "Zero online presence to industry thought leader",
    solution: "Complete digital strategy with content creation and influencer positioning",
    results: {
      leads: "400%",
      revenue: "$2.5M+",
      followers: "50K+",
      engagement: "325%"
    },
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format",
    tags: ["Digital Strategy", "Content Creation", "Thought Leadership"],
    testimonial: "InfluED transformed our entire business. We went from unknown to industry leader in just 6 months.",
    clientLogo: "TS"
  },
  {
    id: 2,
    title: "EduTech Authority Building",
    client: "EduTech Solutions",
    industry: "Education Technology",
    challenge: "Low brand awareness in competitive market",
    solution: "Educational content series and expert positioning strategy",
    results: {
      leads: "320%",
      revenue: "$1.8M+",
      followers: "35K+",
      engagement: "280%"
    },
    duration: "4 months",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
    tags: ["Education", "Video Content", "Expert Positioning"],
    testimonial: "The ROI was phenomenal. From zero to thought leader in record time.",
    clientLogo: "ET"
  },
  {
    id: 3,
    title: "FinTech Digital Influence",
    client: "FinTech Pro",
    industry: "Financial Technology",
    challenge: "Complex product needing simple explanation",
    solution: "Simplified content strategy with visual storytelling",
    results: {
      leads: "280%",
      revenue: "$1.2M+",
      followers: "28K+",
      engagement: "240%"
    },
    duration: "5 months",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&auto=format",
    tags: ["FinTech", "Visual Content", "Simplification"],
    testimonial: "They made our complex product accessible to everyone. Amazing results.",
    clientLogo: "FT"
  },
  {
    id: 4,
    title: "HealthTech Leadership",
    client: "HealthTech Innovations",
    industry: "Healthcare Technology",
    challenge: "Building trust in sensitive healthcare market",
    solution: "Authority building through educational content and partnerships",
    results: {
      leads: "350%",
      revenue: "$3.1M+",
      followers: "42K+",
      engagement: "310%"
    },
    duration: "8 months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format",
    tags: ["Healthcare", "Trust Building", "Educational Content"],
    testimonial: "InfluED helped us build unshakeable trust in the healthcare market.",
    clientLogo: "HT"
  },
  {
    id: 5,
    title: "E-commerce Scale-Up",
    client: "RetailFlow",
    industry: "E-commerce",
    challenge: "Scaling from local to national presence",
    solution: "Multi-platform content strategy and influencer campaigns",
    results: {
      leads: "450%",
      revenue: "$4.2M+",
      followers: "65K+",
      engagement: "380%"
    },
    duration: "7 months",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    tags: ["E-commerce", "Multi-platform", "Scaling"],
    testimonial: "We scaled from local to national thanks to InfluED&apos;s strategy.",
    clientLogo: "RF"
  },
  {
    id: 6,
    title: "Consulting Firm Authority",
    client: "Strategic Consultants",
    industry: "Business Consulting",
    challenge: "Differentiating in crowded consulting market",
    solution: "Thought leadership content and industry positioning",
    results: {
      leads: "380%",
      revenue: "$2.8M+",
      followers: "38K+",
      engagement: "290%"
    },
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
    tags: ["Consulting", "Thought Leadership", "Differentiation"],
    testimonial: "InfluED positioned us as the go-to experts in our field.",
    clientLogo: "SC"
  }
];

const industries = ["All", "Technology", "Education", "Finance", "Healthcare", "E-commerce", "Consulting"];

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredCases = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry.includes(selectedIndustry));

  return (
    <main className="bg-gradient-to-br from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-red to-accent-blue bg-clip-text text-transparent font-semibold text-lg tracking-wide">
              SUCCESS SHOWCASE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-custom-black leading-tight">
            Our <span className="text-primary-red">Portfolio</span> of<br />
            Digital <span className="text-accent-blue">Transformations</span>
          </h1>
          <p className="text-xl text-custom-black/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Real case studies showcasing how we&apos;ve helped businesses across industries 
            build authority, generate leads, and achieve remarkable growth through strategic digital influence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-black text-primary-red mb-2">500+</div>
              <div className="text-sm text-custom-black/60">Projects Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-black text-accent-blue mb-2">$50M+</div>
              <div className="text-sm text-custom-black/60">Revenue Generated</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-black text-green-600 mb-2">350%</div>
              <div className="text-sm text-custom-black/60">Avg ROI Increase</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-black text-purple-600 mb-2">95%</div>
              <div className="text-sm text-custom-black/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-primary-red text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-custom-black hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-red/20 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-primary-red">{caseStudy.clientLogo}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {caseStudy.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-custom-black mb-2 group-hover:text-primary-red transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-custom-black/60 text-sm mb-4">
                    {caseStudy.client} • {caseStudy.industry}
                  </p>

                  {/* Results Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-red">{caseStudy.results.leads}</div>
                      <div className="text-xs text-custom-black/60">Lead Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent-blue">{caseStudy.results.revenue}</div>
                      <div className="text-xs text-custom-black/60">Revenue Generated</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-red">View Case Study</span>
                    <svg className="w-5 h-5 text-primary-red group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-custom-black to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Be Our Next <span className="text-accent-blue">Success Story</span>?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Join the ranks of industry leaders who&apos;ve transformed their businesses with InfluED.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-red hover:bg-red-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl">🚀</span>
                Start Your Transformation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-custom-black px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 