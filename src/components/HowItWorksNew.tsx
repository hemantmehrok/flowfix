import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HowItWorksNew: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleSteps.includes(index)) {
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Peel & Place",
      description: "Gently position FlowFix on the bridge of your nose."
    },
    {
      title: "Magnetic Expansion",
      description: "Built-in magnets activate to expand your nasal passages."
    },
    {
      title: "Effortless Breathing",
      description: "Feel the difference in airflow, sleep, and stamina."
    }
  ];

  return (
    <section id="how-it-works" className="relative min-h-[100vh] flex items-center justify-center mt-[-35vh]">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/FK1Zjg31/temp-Imagey-Eo-Tz-M.avif")',
        }}
      >
        {/* Multi-layer overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Three simple steps to unlock optimal breathing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepRefs.current[index] = el}
              className={`transform transition-all duration-700 ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-royal-blue-500/50 transition-all duration-300 h-full group">
                <div className="w-20 h-20 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-4xl font-bold text-white group-hover:bg-royal-blue-800/50 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-royal-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/learn-more"
            className="relative group inline-flex items-center"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
              <span className="text-white font-semibold text-lg">Learn More</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNew;