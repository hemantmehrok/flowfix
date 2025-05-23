import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white pr-8">{question}</h3>
        <span className="text-royal-blue-400 flex-shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do FlowFix nasal strips work?",
      answer: "FlowFix uses proprietary magnetic technology to gently pull your nasal passages open without adhesives. The medical-grade magnets create the perfect amount of tension to increase airflow by up to 58% compared to regular breathing."
    },
    {
      question: "Are FlowFix strips comfortable to wear?",
      answer: "Absolutely. Unlike traditional adhesive strips, FlowFix is designed with premium materials that contour to your nasal bridge. Most users report forgetting they're even wearing them after a few minutes."
    },
    {
      question: "How long do FlowFix strips last?",
      answer: "Each FlowFix strip is designed for single-use and provides optimal performance for 8-10 hours. For best results, we recommend using a fresh strip each time."
    },
    {
      question: "Can athletes wear FlowFix during intense activities?",
      answer: "Yes, FlowFix was specifically engineered to stay in place during physical activity. The magnetic design ensures they remain secure even during intense workouts, running, or competitive sports."
    },
    {
      question: "Will FlowFix help with my snoring?",
      answer: "Many users report significant reduction in snoring. FlowFix works by opening the nasal passages, which often addresses one of the primary causes of snoring. Results may vary depending on the specific cause of your snoring."
    },
    {
      question: "Are there any side effects to using magnetic nasal strips?",
      answer: "FlowFix is made with hypoallergenic materials and has no known side effects. However, individuals with pacemakers or other implanted electronic medical devices should consult their physician before use."
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-matte-black to-royal-blue-900/50 py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-royal-blue-900/50 text-royal-blue-400 rounded-full text-sm font-semibold mb-4">
            FREQUENTLY ASKED
          </span>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Questions & <span className="text-royal-blue-400">Answers</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about FlowFix magnetic nasal strips.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <button className="bg-royal-blue-600 hover:bg-royal-blue-500 text-white px-6 py-3 rounded-md transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;