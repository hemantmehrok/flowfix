import React, { useEffect, useRef } from 'react';
import { ShieldCheck, FlaskRound as Flask, Heart } from 'lucide-react';

const BenefitsBanner: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: <ShieldCheck size={28} />, text: '30 DAY RISK-FREE TRIAL' },
    { icon: <Flask size={28} />, text: 'BACKED BY SCIENCE' },
    { icon: <Heart size={28} />, text: '100% SAFE & COMFORTABLE' },
    // Duplicate items for smooth infinite scroll
    { icon: <ShieldCheck size={28} />, text: '30 DAY RISK-FREE TRIAL' },
    { icon: <Flask size={28} />, text: 'BACKED BY SCIENCE' },
    { icon: <Heart size={28} />, text: '100% SAFE & COMFORTABLE' }
  ];

  return (
    <div className="bg-matte-black py-6 relative overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap"
      >
        <div className="flex animate-scroll">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center px-12 space-x-3 text-white"
            >
              <span className="text-royal-blue-400">{benefit.icon}</span>
              <span className="text-lg font-bold tracking-wide">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsBanner;