import React, { useEffect, useRef } from 'react';
import { Skull, Clock, Moon, Brain, Settings as Lungs, Bluetooth as Tooth, Brush as Virus } from 'lucide-react';

const HealthImpact: React.FC = () => {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      icon: <Skull className="w-6 h-6" />,
      emoji: "✅",
      title: "Facial Distortion & Weak Jawline",
      text: "Mouth breathing weakens facial muscles and causes a saggy, less defined appearance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      emoji: "⏳",
      title: "Accelerated Aging",
      text: "Leads to premature aging and long-term negative impacts on your well-being."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      emoji: "🌙",
      title: "Poor Sleep Quality",
      text: "Triggers snoring, fatigue, and disturbed sleep patterns."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      emoji: "🧠",
      title: "Mental Fatigue & Anxiety",
      text: "Disrupts brain chemistry, leading to heightened stress and low mood."
    },
    {
      icon: <Lungs className="w-6 h-6" />,
      emoji: "🫁",
      title: "Reduced Oxygen & Low Stamina",
      text: "Limits oxygen intake and weakens physical performance."
    },
    {
      icon: <Tooth className="w-6 h-6" />,
      emoji: "😬",
      title: "Oral Health Problems",
      text: "Increases risk of gum disease, dental issues, and chronic bad breath."
    },
    {
      icon: <Virus className="w-6 h-6" />,
      emoji: "🦠",
      title: "Higher Risk of Illness",
      text: "Exposes lungs to more pathogens and raises chances of respiratory infections."
    }
  ];

  return (
    <>
      {/* Points Section */}
      <section className="bg-gradient-to-b from-matte-black to-royal-blue-900/30 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-1">
              Mouth Breathing Is Harming Your
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-royal-blue-400 to-white bg-clip-text text-transparent text-center mb-12">
              Health and Appearance
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {impacts.map((impact, index) => (
                <div 
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`transform transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-royal-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-royal-blue-500/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          {impact.emoji}
                        </span>
                        <div className="text-royal-blue-400 filter drop-shadow-[0_0_8px_rgba(92,141,255,0.5)] group-hover:scale-110 transition-transform">
                          {impact.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 group-hover:text-royal-blue-400 transition-colors">
                          {impact.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{impact.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Fade Transition */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-royal-blue-900/30 to-transparent z-10"></div>
        <img
          src="https://i.postimg.cc/pdQ1Wg4z/temp-Imaged-Rberl.avif"
          alt="Health impact visualization"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '80vh' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-matte-black to-transparent"></div>
      </section>
    </>
  );
};

export default HealthImpact;