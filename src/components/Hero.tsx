
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, FileEdit, Users, Star, Sparkles } from 'lucide-react';
import estimStudents from '/lovable-uploads/b8c9ac9f-37af-4ed0-aeec-4ce8d8acef4d.png';

const Hero = () => {
  return (
    <section className="relative pt-0 pb-0 min-h-screen overflow-hidden group">
      {/* Full Banner Image with Modern Effects */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={estimStudents} 
          alt="Diplômés ESTIM - Cérémonie de remise des diplômes" 
          className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-estim-green/10 via-transparent to-estim-gold/5"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[20%] w-2 h-2 bg-white/30 rounded-full animate-ping delay-100"></div>
        <div className="absolute top-1/3 right-[25%] w-1 h-1 bg-estim-gold/50 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-[70%] w-1.5 h-1.5 bg-estim-green/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 left-[10%] w-1 h-1 bg-white/20 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="container px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto mb-6 group/logo">
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-white/40 transition-all duration-500 group-hover/logo:scale-105 group-hover/logo:shadow-3xl">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-4/5 h-4/5 object-contain drop-shadow-xl transition-transform duration-500 group-hover/logo:scale-110"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/30 via-white/20 to-estim-gold/30 rounded-3xl blur-3xl animate-pulse opacity-70"></div>
              <div className="absolute -z-20 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-3xl blur-2xl animate-ping opacity-50"></div>
            </div>
            
            {/* Badge */}
            <div className="mb-6 inline-block animate-fade-in delay-300">
              <div className="flex items-center px-6 py-3 text-sm rounded-full bg-white/95 text-estim-green border border-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/badge">
                <Sparkles className="mr-2 w-4 h-4 fill-current animate-pulse" />
                <span className="font-semibold">ESTIM je t'estime !</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-estim-green/10 to-estim-gold/10 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in delay-500 leading-tight text-white drop-shadow-lg">
              Votre Avenir commence à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green via-estim-gold to-estim-green animate-pulse">
                ESTIM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in delay-700 leading-relaxed drop-shadow-md">
              L'École Supérieure de Technologie, d'Innovation et de Management 
              vous propose une formation d'excellence adaptée aux besoins du marché.
            </p>

            {/* Call to Action Buttons */}
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex justify-center items-center max-w-4xl mx-auto animate-fade-in delay-1000">
              <Link to="/pre-registration" className="flex-1 block max-w-md group/cta">
                <Button 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700"></div>
                  <FileEdit className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Pré-inscription rapide</span>
                </Button>
              </Link>

              <Link to="/complete-registration" className="flex-1 block max-w-md group/cta2">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-estim-green rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/cta2:translate-x-[100%] transition-transform duration-700"></div>
                  <Users className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Inscription complète</span>
                </Button>
              </Link>
            </div>
            
            <div className="mt-6 animate-fade-in delay-1200">
              <a href="#tracks" className="block max-w-md mx-auto group/discover">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-16 text-lg font-semibold border-2 border-estim-gold/80 text-estim-gold hover:bg-estim-gold hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-estim-gold/0 via-estim-gold/20 to-estim-gold/0 translate-x-[-100%] group-hover/discover:translate-x-[100%] transition-transform duration-700"></div>
                  <GraduationCap className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Découvrir nos filières</span>
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
