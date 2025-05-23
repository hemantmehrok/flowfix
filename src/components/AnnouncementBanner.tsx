import React from 'react';

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-royal-blue-900 overflow-hidden whitespace-nowrap relative h-12">
      <div className="absolute top-0 left-0 animate-scroll flex items-center h-full">
        <span className="inline-block px-8 py-2.5 text-base font-bold text-white tracking-wide">
          Get 10% OFF your first order – Use code: FIRST10 at checkout
        </span>
        <span className="inline-block px-8 py-2.5 text-base font-bold text-white tracking-wide">
          Get 10% OFF your first order – Use code: FIRST10 at checkout
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;