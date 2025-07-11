
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PreRegistrationHeader from '@/components/PreRegistrationHeader';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import estimStudents from '/lovable-uploads/b8c9ac9f-37af-4ed0-aeec-4ce8d8acef4d.png';

const PreRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5 relative overflow-hidden pt-16 lg:pt-24">
        {/* Background Image for Desktop/Tablet */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <img 
            src={estimStudents} 
            alt="Diplômés ESTIM - Cérémonie de remise des diplômes" 
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-white/90"></div>
        </div>
        
        <div className="container px-4 py-8 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden max-w-md mx-auto">
          <PreRegistrationHeader />
          <PreRegistrationForm />
        </div>
        
        {/* Desktop/Tablet Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="max-w-lg">
            <PreRegistrationHeader />
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi choisir ESTIM ?</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-estim-green rounded-full"></div>
                    <span className="text-gray-700">Formation pratique et moderne</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-estim-gold rounded-full"></div>
                    <span className="text-gray-700">Encadrement personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-estim-green rounded-full"></div>
                    <span className="text-gray-700">Insertion professionnelle garantie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-estim-gold rounded-full"></div>
                    <span className="text-gray-700">Plus de 2000 diplômés</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-estim-green/20 to-estim-gold/20 rounded-full border border-estim-green/30">
                  <span className="text-estim-green font-semibold text-sm">ESTIM je t'estime !</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="max-w-md mx-auto w-full">
            <PreRegistrationForm />
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PreRegistration;
