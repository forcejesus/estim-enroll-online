
import React from 'react';
import Hero from '@/components/Hero';
import Tracks from '@/components/Tracks';
import { Award, Target, Users, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Tracks />
        
        {/* Modern About Section */}
        <section id="about" className="py-16 bg-gradient-to-br from-white via-gray-50 to-estim-green/5 relative overflow-hidden">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800">
                  À propos d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">ESTIM</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto"></div>
              </div>

              {/* Mission Statement */}
              <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                    L'École Supérieure de Technologie, d'Innovation et de Management (ESTIM) est une 
                    institution d'enseignement supérieur dédiée à l'excellence académique et à la 
                    formation de professionnels hautement qualifiés.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed text-center">
                    Notre mission est de préparer les étudiants aux défis du marché du travail en leur 
                    offrant une formation complète, basée sur les compétences pratiques et les connaissances 
                    théoriques nécessaires à leur réussite professionnelle.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-green/20 text-estim-green mb-4 mx-auto">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">Excellence Académique</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    Formation de haute qualité dispensée par des experts reconnus dans leurs domaines respectifs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-gold/20 text-estim-gold mb-4 mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">Accompagnement Personnalisé</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    Suivi individualisé de chaque étudiant pour garantir sa réussite académique et professionnelle.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-green/20 text-estim-green mb-4 mx-auto">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">Ouverture sur le Monde</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    Formations adaptées aux standards internationaux et aux exigences du marché global.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-20 left-8 w-20 h-20 bg-estim-green/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-12 w-16 h-16 bg-estim-gold/10 rounded-full blur-xl"></div>
        </section>
        
        <div className="h-8"></div>
      </main>
    </div>
  );
};

export default Index;
