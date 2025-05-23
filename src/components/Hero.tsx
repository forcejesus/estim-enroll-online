
import React from 'react';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-white to-gray-100">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="relative w-[200px] h-[200px] mx-auto mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-auto h-full object-contain"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-full blur-lg"></div>
            </div>
            
            <div className="mb-3 inline-block">
              <div className="flex items-center px-3 py-1 text-sm rounded-full bg-estim-green/10 text-estim-green">
                <span className="mr-1">✦</span> Formation d'Excellence
              </div>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Votre Avenir commence à{" "}
              <span className="text-estim-green">ESTIM</span>
            </h1>
            <p className="text-muted-foreground text-base mb-6 max-w-sm mx-auto animate-slide-up">
              L'École Supérieure de Technologie, d'Innovation et de Management 
              vous propose une formation d'excellence adaptée aux besoins du marché.
            </p>
            <div className="grid grid-cols-1 gap-3 w-full max-w-xs mx-auto">
              <ScrollLink to="register" smooth={true} duration={500} className="w-full">
                <Button variant="default" size="lg" className="w-full">
                  Pré-inscription
                </Button>
              </ScrollLink>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => document.getElementById('complete-registration-dialog')?.click()}
              >
                Inscription complète
              </Button>
            </div>
          </div>
          <ScrollLink to="tracks" smooth={true} duration={500} className="animate-bounce flex flex-col items-center text-estim-green cursor-pointer">
            <span className="text-sm font-medium mb-1">Découvrir nos filières</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
