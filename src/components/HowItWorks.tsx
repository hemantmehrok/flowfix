import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  const steps = [
    {
      id: 1,
      title: "Peel & Place",
      description: "Gently position FlowFix on the bridge of your nose. The ergonomic design ensures perfect alignment with your nasal passages."
    },
    {
      id: 2,
      title: "Magnetic Expansion",
      description: "Advanced magnetic technology activates instantly, creating an optimal opening force that gently expands your nasal passages."
    },
    {
      id: 3,
      title: "Effortless Breathing",
      description: "Experience immediate improvement in airflow. Feel the difference as oxygen flows freely, enhancing your breathing naturally."
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="bg-matte-black py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-royal-blue-900/50 text-royal-blue-400 rounded-full text-sm font-semibold mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Experience the <span className="text-royal-blue-400">Flow</span>
          </h2>
          <p className="text-xl text-gray-300">
            Three simple steps to optimal breathing
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Left side - Steps */}
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`group p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                  activeStep === step.id 
                    ? 'bg-royal-blue-900/30 border-royal-blue-400 scale-105' 
                    : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    activeStep === step.id 
                      ? 'bg-royal-blue-400 text-white shadow-[0_0_15px_rgba(92,141,255,0.5)]' 
                      : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                  }`}>
                    {step.id}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Animation */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Step 1 Animation */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-48 h-12 bg-gray-800 rounded-lg transform rotate-6">
                    <div className="absolute inset-1 bg-royal-blue-900 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-royal-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 Animation */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-48 h-12 bg-gray-800 rounded-lg transform rotate-6">
                    <div className="absolute inset-1 bg-royal-blue-900 rounded-md">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-2 bg-royal-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-royal-blue-400 rounded-full">
                          <div className="absolute inset-0 bg-royal-blue-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 Animation */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                activeStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-12 bg-gray-800 rounded-lg transform rotate-6">
                      <div className="absolute inset-1 bg-royal-blue-900 rounded-md">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-36 h-3 bg-royal-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 flex justify-center space-x-2">
                      <div className="w-1 h-8 bg-royal-blue-400/30 rounded-full animate-[breathe_2s_ease-in-out_infinite]"></div>
                      <div className="w-1 h-8 bg-royal-blue-400/30 rounded-full animate-[breathe_2s_ease-in-out_infinite_0.3s]"></div>
                      <div className="w-1 h-8 bg-royal-blue-400/30 rounded-full animate-[breathe_2s_ease-in-out_infinite_0.6s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;