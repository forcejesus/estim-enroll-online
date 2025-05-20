
import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <div className="mb-4 inline-block">
                <div className="flex items-center px-3 py-1 text-sm rounded-full bg-estim-green/10 text-estim-green">
                  <span className="mr-1">✦</span> Formation d'Excellence
                </div>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Votre Avenir commence à{" "}
                <span className="text-estim-green">ESTIM</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md animate-slide-up">
                L'École Supérieure de Technologie, d'Innovation et de Management 
                vous propose une formation d'excellence adaptée aux besoins du marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Pré-inscription
                </Button>
                <Button variant="outline" size="lg">
                  Découvrir nos filières
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center relative animate-fade-in">
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-auto h-full object-contain"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
