import React, { useEffect, useRef, useState } from 'react';
import Layout from '../layouts/Layout';
import { ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMoreBenefits: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Reduce Snoring & Improve Sleep Quality",
      description: "Opens nasal passages, reduces airway resistance, and minimizes nighttime disruptions for deeper sleep."
    },
    {
      title: "Enhanced O₂ Intake & Lung Function",
      description: "Magnetic dilation increases airflow, optimizing oxygen absorption and respiratory efficiency."
    },
    {
      title: "Improved Performance & Recovery",
      description: "Better oxygenation enhances endurance, reduces fatigue, and supports muscle recovery."
    },
    {
      title: "Improved Dental Hygiene",
      description: "Prevents mouth breathing—reducing dry mouth, cavities, and gum disease."
    },
    {
      title: "Reduced Dry Mouth & Stay Hydrated",
      description: "By promoting nasal breathing, saliva retention and oral moisture balance is preserved."
    },
    {
      title: "Jaw & Facial Alignment",
      description: "Supports healthy jaw posture and muscle tone, preventing the \"mouth breather\" facial structure."
    },
    {
      title: "Supports Overall Digestion",
      description: "Better breathing improves vagal nerve function, leading to more effective digestion."
    },
    {
      title: "Supports Hormonal Health",
      description: "Breathing through the nose activates the parasympathetic nervous system, balancing cortisol and boosting hormonal regulation."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-matte-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Warm Sunrise Background Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-royal-blue-900/20 via-royal-blue-600/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-gold-500/10 via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Unlock the Full Power of
                <span className="block text-royal-blue-400">FlowFix™</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover the science-backed advantages of better breathing.
              </p>
              <button className="bg-royal-blue-600 hover:bg-royal-blue-500 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center mx-auto group">
                <ShoppingCart className="mr-2" />
                <span>Shop Now</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  ref={el => sectionRefs.current[index] = el}
                  className={`transform transition-all duration-700 ${
                    visibleSections.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-royal-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-royal-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-royal-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Aid Section */}
        <section 
          ref={el => sectionRefs.current[8] = el}
          className={`py-20 relative transition-all duration-700 ${
            visibleSections.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/XNkwBCFF/D8-CF2-C49-F533-46-D7-87-EB-E4-BA00080-C3-E.png"
                  alt="Before and after comparison"
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-matte-black/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Block */}
        <section 
          ref={el => sectionRefs.current[9] = el}
          className={`py-20 relative transition-all duration-700 ${
            visibleSections.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Your Breathing Should Work for You
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Naturally unlock better energy, posture, and calm with FlowFix magnetic nasal strips.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <div className="absolute inset-0 bg-royal-blue-600/10 rounded-full blur-3xl animate-breathe"></div>
              <div className="absolute inset-[25%] bg-royal-blue-500/10 rounded-full blur-3xl animate-breathe delay-300"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <button className="relative group inline-flex items-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                  <span className="text-white font-semibold text-lg">Buy Now – Save 20%</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white rounded-lg transition-all">
                Try Risk-Free for 30 Days
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LearnMoreBenefits;