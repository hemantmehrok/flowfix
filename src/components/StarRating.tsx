import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 20, className = '' }) => {
  return (
    <div className={`flex ${className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rating
              ? 'text-gold-500 fill-gold-500 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]'
              : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;