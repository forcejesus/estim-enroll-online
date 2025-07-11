import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Tracks from '@/components/Tracks';
import Partners from '@/components/Partners';
import { Award, Target, Users, Globe, CheckCircle, BookOpen, Trophy, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 lg:pt-24">
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

        <Tracks />
        
        {/* Why Choose ESTIM Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-estim-green/5">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-800">
                  Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">ESTIM</span> ?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                  Découvrez les avantages uniques qui font d'ESTIM le choix idéal pour votre formation supérieure
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-green/20 text-estim-green flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">Formation Pratique</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Programmes axés sur la pratique avec des projets réels, stages en entreprise et équipements modernes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-gold/20 text-estim-gold flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">Encadrement Personnalisé</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Classes à effectif réduit permettant un suivi individualisé de chaque étudiant.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-estim-green/20 text-estim-green flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">Insertion Professionnelle</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Réseau d'entreprises partenaires et accompagnement à l'insertion professionnelle.
                      </p>
                    </div>
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
      
      <Footer />
    </div>
  );
};

export default Index;