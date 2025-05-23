
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Tracks from '@/components/Tracks';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import CompleteRegistrationDialog from '@/components/CompleteRegistrationDialog';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Tracks />
        <section id="about" className="py-8 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container px-4">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold font-heading mb-3">À propos de ESTIM</h2>
              
              <div className="relative">
                <div className="absolute -top-8 -left-12 w-24 h-24 bg-estim-green/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -right-8 w-20 h-20 bg-estim-gold/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    L'École Supérieure de Technologie, d'Innovation et de Management (ESTIM) est une 
                    institution d'enseignement supérieur dédiée à l'excellence académique et à la 
                    formation de professionnels hautement qualifiés.
                  </p>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Notre mission est de préparer les étudiants aux défis du marché du travail en leur 
                    offrant une formation complète, basée sur les compétences pratiques et les connaissances 
                    théoriques nécessaires à leur réussite professionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PreRegistrationForm />
        <div className="h-8"></div>
      </main>
      <CompleteRegistrationDialog />
    </div>
  );
};

export default Index;
