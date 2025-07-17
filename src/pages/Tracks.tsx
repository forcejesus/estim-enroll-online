import React from 'react';
import Tracks from '@/components/Tracks';

const TracksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-estim-green/5 to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-800">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">Filières</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Découvrez nos formations d'excellence conçues pour répondre aux besoins du marché du travail
          </p>
        </div>
        <Tracks />
      </div>
    </div>
  );
};

export default TracksPage;