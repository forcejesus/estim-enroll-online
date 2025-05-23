
import React from 'react';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-8 bg-gradient-to-br from-white to-gray-100 min-h-screen flex items-center">
      <div className="container px-3">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
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
              <div className="flex items-center px-3 py-1 text-xs rounded-full bg-estim-green/10 text-estim-green">
                <span className="mr-1">✦</span> Formation d'Excellence
              </div>
            </div>
            <h1 className="font-heading text-2xl font-bold mb-3 animate-fade-in px-2">
              Votre Avenir commence à{" "}
              <span className="text-estim-green">ESTIM</span>
            </h1>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto animate-slide-up px-4">
              L'École Supérieure de Technologie, d'Innovation et de Management 
              vous propose une formation d'excellence adaptée aux besoins du marché.
            </p>
            <div className="space-y-3 w-full max-w-xs mx-auto px-4">
              <ScrollLink to="tracks" smooth={true} duration={500} className="w-full block">
                <Button variant="default" size="lg" className="w-full text-sm">
                  Découvrir nos filières
                </Button>
              </ScrollLink>
              <ScrollLink to="register" smooth={true} duration={500} className="w-full block">
                <Button variant="outline" size="lg" className="w-full text-sm">
                  Pré-inscription rapide
                </Button>
              </ScrollLink>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full text-sm border-estim-green text-estim-green"
                onClick={() => document.getElementById('complete-registration-dialog')?.click()}
              >
                Inscription complète
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
