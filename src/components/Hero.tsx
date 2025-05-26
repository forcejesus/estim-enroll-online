
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, FileEdit, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 bg-gradient-to-br from-white via-gray-50 to-estim-green/5 min-h-screen flex items-center">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-36 h-36 mx-auto mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-auto h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/30 to-estim-gold/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
            
            {/* Badge */}
            <div className="mb-4 inline-block">
              <div className="flex items-center px-4 py-2 text-sm rounded-full bg-gradient-to-r from-estim-green/20 to-estim-gold/20 text-estim-green border border-estim-green/30">
                <span className="mr-2 text-lg">✦</span> 
                <span className="font-semibold">Formation d'Excellence</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in px-4 leading-tight">
              Votre Avenir commence à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">
                ESTIM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-base mb-8 max-w-md mx-auto animate-slide-up px-4 leading-relaxed">
              L'École Supérieure de Technologie, d'Innovation et de Management 
              vous propose une formation d'excellence adaptée aux besoins du marché.
            </p>

            {/* Call to Action Buttons */}
            <div className="space-y-4 w-full max-w-sm mx-auto px-4">
              <Link to="/pre-registration" className="w-full block">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FileEdit className="w-5 h-5 mr-3" />
                  Pré-inscription rapide
                </Button>
              </Link>

              <a href="#tracks" className="w-full block">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white rounded-xl transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5 mr-3" />
                  Découvrir nos filières
                </Button>
              </a>

              <Link to="/complete-registration" className="w-full block">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold border-2 border-estim-gold text-estim-gold hover:bg-estim-gold hover:text-white rounded-xl transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Inscription complète
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 bg-estim-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-12 w-12 h-12 bg-estim-gold/20 rounded-full blur-lg animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-estim-green/15 rounded-full blur-md animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
