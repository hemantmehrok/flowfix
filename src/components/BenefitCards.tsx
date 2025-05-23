import React, { useEffect, useRef, useState } from 'react';
import { Wind, Moon, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitCards: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Wind size={32} />,
      title: "Enhanced Airflow",
      description: "Increases nasal passage opening by up to 58%, helping you breathe more freely with every breath."
    },
    {
      icon: <Moon size={32} />,
      title: "Better Sleep Quality",
      description: "Reduces snoring and boosts oxygen intake, improving sleep depth and reducing night-time disruptions."
    },
    {
      icon: <Activity size={32} />,
      title: "Athletic Performance",
      description: "Boosts oxygen delivery during training and competition, improving stamina, recovery, and endurance."
    }
  ];

  return (
    <section id="benefits-section" className="bg-gradient-to-b from-matte-black to-royal-blue-900/30 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Experience the <span className="text-royal-blue-400">Difference</span>
          </h2>
          <p className="text-xl text-gray-300">
            Unlock your breathing potential with our innovative magnetic technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group bg-gradient-to-br from-gray-900/50 to-royal-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-royal-blue-600/50 transition-all duration-500 h-full hover:transform hover:scale-[1.02]">
                <div className="w-16 h-16 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-blue-800/50 transition-colors relative">
                  <div className="absolute inset-0 bg-royal-blue-400/20 rounded-xl blur-xl group-hover:bg-royal-blue-400/30 transition-all duration-300"></div>
                  <div className="relative text-royal-blue-400 animate-pulse">{benefit.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/learn-more-benefits"
            className="inline-flex items-center text-royal-blue-400 hover:text-royal-blue-300 transition-colors"
          >
            Learn More About Benefits
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;