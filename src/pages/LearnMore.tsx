import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { ArrowRight, Check, FlaskRound as Flask, Brain, Activity, Award } from 'lucide-react';

const LearnMore: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Discover the <span className="text-royal-blue-400">FlowFix™</span> Difference
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Revolutionary magnetic nasal strips that transform your breathing experience, backed by science and trusted by thousands.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
              How <span className="text-royal-blue-400">FlowFix™</span> Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Peel & Place",
                  description: "Our ergonomically designed strips conform perfectly to your nasal bridge. The medical-grade materials ensure comfort and security without adhesives."
                },
                {
                  title: "Magnetic Expansion",
                  description: "Proprietary magnetic technology creates gentle lifting forces that optimize nasal passage opening. The result is up to 58% more airflow without pressure or irritation."
                },
                {
                  title: "Effortless Breathing",
                  description: "Experience immediate improvement in breathing quality. Whether you're sleeping, training, or going about your day, enjoy unrestricted airflow naturally."
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                  <div className="w-12 h-12 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-royal-blue-400">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                The Science Behind <span className="text-royal-blue-400">FlowFix™</span>
              </h2>
              <p className="text-xl text-gray-300">
                Years of research and development have gone into creating the perfect breathing solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                  <Flask size={24} className="text-royal-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Magnetic Technology</h3>
                <p className="text-gray-300">
                  Our proprietary magnetic technology creates the perfect amount of lift without adhesives or pressure points. The medical-grade magnets work with your body's natural anatomy.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                  <Brain size={24} className="text-royal-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Clinical Research</h3>
                <p className="text-gray-300">
                  Extensive clinical studies show FlowFix™ increases nasal airflow by up to 58% compared to normal breathing, with 97% of users reporting improved sleep quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
              Health Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Improved sleep quality and reduced snoring",
                "Enhanced athletic performance and stamina",
                "Better oxygen intake and lung function",
                "Reduced mouth breathing and dry mouth",
                "Improved focus and mental clarity",
                "Faster post-workout recovery"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-royal-blue-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Safety & Materials
              </h2>
              <p className="text-xl text-gray-300">
                Your safety and comfort are our top priorities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Medical-Grade Materials",
                  description: "Made with hypoallergenic, skin-safe materials that meet the highest medical standards."
                },
                {
                  title: "Extensively Tested",
                  description: "Each batch undergoes rigorous quality control and safety testing before release."
                },
                {
                  title: "Dermatologist Approved",
                  description: "Certified safe for all skin types with no known side effects or irritation."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-8">
              Ready to transform your breathing?
            </h2>
            <Link 
              to="/"
              className="relative group inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Get FlowFix™ Now</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearnMore;