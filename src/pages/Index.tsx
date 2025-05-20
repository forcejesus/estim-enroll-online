
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Tracks from '@/components/Tracks';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Tracks />
        <section id="about" className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">À propos de ESTIM</h2>
              <p className="text-lg text-muted-foreground mb-6">
                L'École Supérieure de Technologie, d'Innovation et de Management (ESTIM) est une 
                institution d'enseignement supérieur dédiée à l'excellence académique et à la 
                formation de professionnels hautement qualifiés.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Notre mission est de préparer les étudiants aux défis du marché du travail en leur 
                offrant une formation complète, basée sur les compétences pratiques et les connaissances 
                théoriques nécessaires à leur réussite professionnelle.
              </p>
              <p className="text-lg text-muted-foreground">
                ESTIM se distingue par ses partenariats industriels solides, son corps professoral 
                expérimenté et ses programmes académiques constamment mis à jour pour répondre aux 
                exigences du monde professionnel.
              </p>
            </div>
          </div>
        </section>
        <PreRegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
