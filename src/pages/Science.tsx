import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FlaskRound as Flask, Brain, Activity, Award, Check, ChevronDown } from 'lucide-react';

const Science: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
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
    <div className="bg-matte-black min-h-screen">
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
              The <span className="text-royal-blue-400">Science</span> Behind
              <span className="block">Better Breathing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover how our revolutionary magnetic technology transforms your breathing experience, backed by clinical research and cutting-edge innovation.
            </p>

            <button className="relative group inline-flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Learn More</span>
                <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Research Tabs */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {[
                { id: 1, icon: <Flask size={24} />, text: "Clinical Studies" },
                { id: 2, icon: <Brain size={24} />, text: "Technology" },
                { id: 3, icon: <Activity size={24} />, text: "Performance Data" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-royal-blue-600 text-white'
                      : 'bg-gray-900/50 text-gray-400 hover:bg-gray-900'
                  }`}
                >
                  {tab.icon}
                  <span className="font-semibold">{tab.text}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              {activeTab === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Clinical Research Results</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 p-6 rounded-xl">
                      <div className="text-4xl font-bold text-royal-blue-400 mb-2">58%</div>
                      <p className="text-gray-300">Increase in nasal airflow compared to baseline</p>
                    </div>
                    <div className="bg-gray-900/50 p-6 rounded-xl">
                      <div className="text-4xl font-bold text-royal-blue-400 mb-2">97%</div>
                      <p className="text-gray-300">Of participants reported improved sleep quality</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Our clinical studies, conducted across multiple research centers, demonstrate significant improvements in breathing efficiency and sleep quality.
                  </p>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Magnetic Technology</h3>
                  <div className="relative">
                    <img
                      src="https://i.postimg.cc/XNkwBCFF/D8-CF2-C49-F533-46-D7-87-EB-E4-BA00080-C3-E.png"
                      alt="FlowFix technology diagram"
                      className="w-full max-w-md mx-auto mb-6"
                    />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent to-matte-black/20"></div>
                  </div>
                  <p className="text-gray-300">
                    Our proprietary magnetic technology creates optimal nasal dilation without adhesives or discomfort, using precisely calibrated magnetic fields.
                  </p>
                </div>
              )}

              {activeTab === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Athletic Performance Impact</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-royal-blue-400 mb-2">+12%</div>
                      <p className="text-gray-300">Endurance Increase</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-royal-blue-400 mb-2">-15%</div>
                      <p className="text-gray-300">Recovery Time</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-royal-blue-400 mb-2">+8%</div>
                      <p className="text-gray-300">Power Output</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Research & Development Process
            </h2>
            <p className="text-xl text-gray-300">
              Years of research and development have gone into creating the perfect breathing solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Initial Research",
                description: "Extensive study of nasal breathing mechanics and magnetic field interactions."
              },
              {
                phase: "Phase 2",
                title: "Prototype Development",
                description: "Multiple iterations of design and material testing for optimal comfort and effectiveness."
              },
              {
                phase: "Phase 3",
                title: "Clinical Trials",
                description: "Rigorous testing with diverse participant groups across multiple research centers."
              },
              {
                phase: "Phase 4",
                title: "Continuous Innovation",
                description: "Ongoing research and development to enhance product effectiveness."
              }
            ].map((phase, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-royal-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-royal-blue-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Recognition */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className={`py-20 relative transition-all duration-1000 ${
          visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Scientific Recognition
              </h2>
              <p className="text-xl text-gray-300">
                Endorsed by leading researchers and medical professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Research Excellence Award",
                  org: "International Sleep Science Foundation",
                  year: "2024"
                },
                {
                  title: "Innovation in Sports Medicine",
                  org: "Sports Medicine Association",
                  year: "2023"
                }
              ].map((award, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-royal-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-royal-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                      <p className="text-gray-400">{award.org}</p>
                      <p className="text-royal-blue-400 text-sm mt-2">{award.year}</p>
                    </div>
                  </div>
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
              Experience the science of better breathing
            </h2>
            <button className="relative group inline-flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Try FlowFix Now</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;