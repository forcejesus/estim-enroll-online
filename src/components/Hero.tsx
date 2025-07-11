
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, FileEdit, Users, Star } from 'lucide-react';
import estimStudents from '/lovable-uploads/b8c9ac9f-37af-4ed0-aeec-4ce8d8acef4d.png';

const Hero = () => {
  return (
    <section className="relative pt-0 pb-0 min-h-screen overflow-hidden">
      {/* Full Banner Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={estimStudents} 
          alt="Diplômés ESTIM - Cérémonie de remise des diplômes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto mb-6 pulse-glow">
              <div className="absolute inset-0 flex items-center justify-center bg-white rounded-3xl shadow-2xl border-4 border-white/30">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-4/5 h-4/5 object-contain drop-shadow-xl"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-3xl animate-pulse"></div>
            </div>
            
            {/* Badge */}
            <div className="mb-6 inline-block">
              <div className="flex items-center px-6 py-3 text-sm rounded-full bg-white/90 text-estim-green border border-white/50 backdrop-blur-sm">
                <Star className="mr-2 w-4 h-4 fill-current" />
                <span className="font-semibold">ESTIM je t'estime !</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in leading-tight text-white drop-shadow-lg">
              Votre Avenir commence à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">
                ESTIM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed drop-shadow-md">
              L'École Supérieure de Technologie, d'Innovation et de Management 
              vous propose une formation d'excellence adaptée aux besoins du marché.
            </p>

            {/* Call to Action Buttons */}
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex justify-center items-center max-w-4xl mx-auto">
              <Link to="/pre-registration" className="flex-1 block max-w-md">
                <Button 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FileEdit className="w-6 h-6 mr-3" />
                  Pré-inscription rapide
                </Button>
              </Link>

              <Link to="/complete-registration" className="flex-1 block max-w-md">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-estim-green rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Users className="w-6 h-6 mr-3" />
                  Inscription complète
                </Button>
              </Link>
            </div>
            
            <div className="mt-6">
              <a href="#tracks" className="block max-w-md mx-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold border-2 border-estim-gold text-estim-gold hover:bg-estim-gold hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Découvrir nos filières
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 bg-estim-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 md:right-12 w-10 h-10 md:w-12 md:h-12 bg-estim-gold/20 rounded-full blur-lg animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-4 md:right-8 w-6 h-6 md:w-8 md:h-8 bg-estim-green/15 rounded-full blur-md animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
