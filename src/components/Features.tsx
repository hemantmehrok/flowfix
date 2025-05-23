import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="bg-matte-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Empty container for spacing */}
        <div className="max-w-2xl mx-auto"></div>
      </div>
    </section>
  );
};

export default Features;