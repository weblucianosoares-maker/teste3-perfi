import React from 'react';

const Logo: React.FC = () => (
  <div className="flex justify-center items-center mb-8">
    <svg width="200" height="200" viewBox="0 0 200 200" className="w-36 h-36 md:w-48 md:h-48">
      <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="36" fontWeight="bold" letterSpacing="5" fontFamily="sans-serif">
        PΛNTHER
      </text>
      <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="normal" letterSpacing="1.2" fontFamily="sans-serif">
        INTELIGÊNCIA EMOCIONAL FINANCEIRA
      </text>
    </svg>
  </div>
);

export default Logo;