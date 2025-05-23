import React from 'react';
import { Truck, DollarSign, Clock, ShieldCheck } from 'lucide-react';

const TrustInfo: React.FC = () => {
  const trustPoints = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping Pan-India",
      description: "No additional charges"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "COD Available",
      description: "Pay on delivery"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3–7 Working Days",
      description: "Fast delivery"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "100% Satisfaction",
      description: "Money-back guarantee"
    }
  ];

  return (
    <div className="border-t border-gray-800 mt-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((point, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gray-900/50 rounded-xl flex items-center justify-center text-royal-blue-400 group-hover:bg-royal-blue-900/50 transition-colors">
              {point.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-royal-blue-400 transition-colors">{point.title}</h3>
              <p className="text-gray-400 text-sm">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustInfo;