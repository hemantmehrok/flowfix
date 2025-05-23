import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Feel the Difference with <span className="text-royal-blue-400">FlowFix™</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without FlowFix */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Without FlowFix</h3>
            <div className="space-y-4">
              {[
                'Restricted nasal breathing',
                'Frequent snoring',
                'Poor sleep quality',
                'Dry mouth in the morning',
                'Reduced athletic performance',
                'Fatigue during the day',
                'Blocked nose during exercise'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With FlowFix */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">With FlowFix</h3>
            <div className="space-y-4">
              {[
                'Optimal nasal breathing',
                'Quiet, peaceful sleep',
                'Wake up refreshed',
                'Proper oral hydration',
                'Enhanced stamina & endurance',
                'Sustained energy levels',
                'Clear airways during workouts'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;