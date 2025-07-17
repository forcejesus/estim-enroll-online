import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Tracks from '@/components/Tracks';
import Partners from '@/components/Partners';
import { Award, Target, Users, Globe, CheckCircle, BookOpen, Trophy, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  // Handle anchor navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial load with hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        
        {/* Stats Section - Mobile Only (Hidden on Desktop as they're in Hero) */}
        <section className="py-12 bg-white lg:hidden">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-estim-green/10 to-estim-gold/10 border border-estim-green/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-estim-green" />
                </div>
                <div className="text-2xl font-bold text-estim-green mb-1">15+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-estim-gold/10 to-estim-green/10 border border-estim-gold/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-estim-gold" />
                </div>
                <div className="text-2xl font-bold text-estim-gold mb-1">2000+</div>
                <div className="text-sm text-gray-600">Diplômés</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-estim-green/10 to-estim-gold/10 border border-estim-green/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-estim-green" />
                </div>
                <div className="text-2xl font-bold text-estim-green mb-1">9</div>
                <div className="text-sm text-gray-600">Filières</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks">
          <Tracks />
        </section>
        
        {/* Why Choose ESTIM Section */}
        <section className="py-20 bg-gradient-to-br from-white via-estim-green/5 to-estim-gold/5 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-estim-green/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-estim-gold/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-8 animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-800 animate-fade-in">
                  Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">ESTIM</span> ?
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  L'excellence académique rencontre l'innovation pédagogique pour former les leaders de demain
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-estim-green/5 to-estim-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-estim-green/20 to-estim-green/30 text-estim-green mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-estim-green transition-colors duration-300">Formation Pratique</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      70% de pratique avec projets réels, stages en entreprise et équipements de pointe pour une immersion totale.
                    </p>
                    <div className="flex items-center text-sm text-estim-green font-semibold">
                      <div className="w-2 h-2 bg-estim-green rounded-full mr-2"></div>
                      Laboratoires équipés
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-estim-gold/5 to-estim-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-estim-gold/20 to-estim-gold/30 text-estim-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-estim-gold transition-colors duration-300">Encadrement d'Excellence</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Ratio 1 enseignant pour 15 étudiants garantissant un accompagnement personnalisé et de qualité.
                    </p>
                    <div className="flex items-center text-sm text-estim-gold font-semibold">
                      <div className="w-2 h-2 bg-estim-gold rounded-full mr-2"></div>
                      Suivi individualisé
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-estim-green/5 to-estim-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-estim-green/20 to-estim-green/30 text-estim-green mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-estim-green transition-colors duration-300">Insertion Garantie</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      95% d'insertion professionnelle grâce à notre réseau de 500+ entreprises partenaires.
                    </p>
                    <div className="flex items-center text-sm text-estim-green font-semibold">
                      <div className="w-2 h-2 bg-estim-green rounded-full mr-2"></div>
                      Réseau entreprises
                    </div>
                  </div>
                </div>
              </div>

              {/* Success metrics */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-estim-gold to-estim-green mb-2 group-hover:scale-110 transition-transform duration-300">2000+</div>
                    <div className="text-sm text-gray-600">Diplômés actifs</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                    <div className="text-sm text-gray-600">Taux d'insertion</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-estim-gold to-estim-green mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-sm text-gray-600">Entreprises partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white relative overflow-hidden">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-800">
                  À propos d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">ESTIM</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto"></div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-gray-50 to-estim-green/5 rounded-3xl p-8 mb-8 relative overflow-hidden border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                    L'École Supérieure de Technologie, d'Innovation et de Management (ESTIM) est une 
                    institution d'enseignement supérieur dédiée à l'excellence académique et à la 
                    formation de professionnels hautement qualifiés.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Notre mission est de préparer les étudiants aux défis du marché du travail en leur 
                    offrant une formation complète, basée sur les compétences pratiques et les connaissances 
                    théoriques nécessaires à leur réussite professionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-20 left-8 w-20 h-20 bg-estim-green/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-12 w-16 h-16 bg-estim-gold/10 rounded-full blur-xl"></div>
        </section>

        {/* Admission Section */}
        <section id="admission" className="py-16 bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-800">
                Conditions d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">Admission</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-8"></div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-estim-green mb-4">Admission Post-Bac</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Baccalauréat toutes séries confondues</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Dossier de candidature complet</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Entretien de motivation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-estim-green mb-4">Admission Parallèle</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">BTS, DUT ou équivalent</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Validation des acquis</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-estim-gold mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Test d'évaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-estim-green/10 to-estim-gold/10 rounded-2xl p-8 border border-estim-green/20">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Calendrier 2024-2025</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-estim-green mb-2">Inscriptions</div>
                    <div className="text-gray-700">Janvier - Juillet 2024</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-estim-green mb-2">Entretiens</div>
                    <div className="text-gray-700">Juin - Août 2024</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-estim-green mb-2">Rentrée</div>
                    <div className="text-gray-700">Septembre 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Partners />

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900 text-white">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                  Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">nous</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-4"></div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Notre équipe est là pour répondre à toutes vos questions sur nos formations et processus d'admission
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-estim-green" />
                  </div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-300 text-sm">
                    123 Avenue de l'École<br />
                    Casablanca, Maroc
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-gold/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-estim-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-300 text-sm">
                    +212 522 XXX XXX<br />
                    +212 661 XXX XXX
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-estim-green" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">
                    contact@estim-edu.com<br />
                    admission@estim-edu.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;