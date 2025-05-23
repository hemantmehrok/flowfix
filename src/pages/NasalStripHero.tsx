import React from 'react';
import Layout from '../layouts/Layout';

const NasalStripHero: React.FC = () => {
  return (
    <Layout>
      <section className="bg-matte-black py-60 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src="https://i.postimg.cc/fTHqXFXx/0571-A84-D-2613-4131-9-A4-A-A7216-B81-D30-E.png"
                alt="Nasal Strip"
                className="w-[300px] transition-transform duration-500 group-hover:scale-110"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-royal-blue-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NasalStripHero;