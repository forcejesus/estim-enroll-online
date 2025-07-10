
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, FileEdit, Users, Star } from 'lucide-react';
import estimStudents from '/lovable-uploads/b8c9ac9f-37af-4ed0-aeec-4ce8d8acef4d.png';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 bg-gradient-to-br from-white via-gray-50 to-estim-green/5 min-h-screen flex items-center overflow-hidden">
      {/* Background Image for Desktop/Tablet */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img 
          src={estimStudents} 
          alt="Diplômés ESTIM - Cérémonie de remise des diplômes" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
            {/* Logo Section - Plus proéminent */}
            <div className="mb-8">
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-44 lg:h-44 xl:w-52 xl:h-52 mx-auto lg:mx-0 mb-6 pulse-glow">
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-3xl shadow-2xl border-4 border-estim-green/20">
                  <img
                    src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                    alt="ESTIM Logo"
                    className="w-4/5 h-4/5 object-contain drop-shadow-xl"
                  />
                </div>
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/40 to-estim-gold/40 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="absolute -z-20 inset-0 scale-110 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-full blur-2xl floating-animation"></div>
              </div>
              
              {/* Badge */}
              <div className="mb-6 inline-block">
                <div className="flex items-center px-4 py-2 text-sm rounded-full bg-gradient-to-r from-estim-green/20 to-estim-gold/20 text-estim-green border border-estim-green/30">
                  <Star className="mr-2 w-4 h-4 fill-current" />
                  <span className="font-semibold">ESTIM je t'estime !</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Votre Avenir commence à{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">
                  ESTIM
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up leading-relaxed">
                L'École Supérieure de Technologie, d'Innovation et de Management 
                vous propose une formation d'excellence adaptée aux besoins du marché.
              </p>

              {/* Call to Action Buttons */}
              <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex w-full max-w-2xl mx-auto lg:mx-0">
                <Link to="/pre-registration" className="flex-1 block">
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FileEdit className="w-5 h-5 mr-3" />
                    Pré-inscription rapide
                  </Button>
                </Link>

                <Link to="/complete-registration" className="flex-1 block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full h-14 text-base font-semibold border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white rounded-xl transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-3" />
                    Inscription complète
                  </Button>
                </Link>
              </div>
              
              <div className="mt-4 lg:mt-6">
                <a href="#tracks" className="block max-w-sm mx-auto lg:mx-0">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full h-14 text-base font-semibold border-2 border-estim-gold text-estim-gold hover:bg-estim-gold hover:text-white rounded-xl transition-all duration-300"
                  >
                    <GraduationCap className="w-5 h-5 mr-3" />
                    Découvrir nos filières
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image - Desktop/Tablet Only */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative">
              <img 
                src={estimStudents} 
                alt="Diplômés ESTIM - Cérémonie de remise des diplômes" 
                className="w-full max-w-lg ml-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-estim-green/20 via-transparent to-estim-gold/10 rounded-3xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-estim-green/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-estim-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-estim-green">2000+</div>
                    <div className="text-sm text-gray-600">Diplômés</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-estim-gold/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-estim-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-estim-gold">9</div>
                    <div className="text-sm text-gray-600">Filières</div>
                  </div>
                </div>
              </div>
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
