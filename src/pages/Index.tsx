
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Tracks from '@/components/Tracks';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import Footer from '@/components/Footer';
import CompleteRegistrationDialog from '@/components/CompleteRegistrationDialog';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Tracks />
        <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">À propos de ESTIM</h2>
              
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-16 w-32 h-32 bg-estim-green/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-16 -right-10 w-24 h-24 bg-estim-gold/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    L'École Supérieure de Technologie, d'Innovation et de Management (ESTIM) est une 
                    institution d'enseignement supérieur dédiée à l'excellence académique et à la 
                    formation de professionnels hautement qualifiés.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Notre mission est de préparer les étudiants aux défis du marché du travail en leur 
                    offrant une formation complète, basée sur les compétences pratiques et les connaissances 
                    théoriques nécessaires à leur réussite professionnelle.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ESTIM se distingue par ses partenariats industriels solides, son corps professoral 
                    expérimenté et ses programmes académiques constamment mis à jour pour répondre aux 
                    exigences du monde professionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PreRegistrationForm />
      </main>
      <Footer />
      <CompleteRegistrationDialog />
    </div>
  );
};

export default Index;
