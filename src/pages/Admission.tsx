import React from 'react';
import { Calendar, Star, CheckCircle, FileText, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdmissionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-8">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-800">
            Conditions d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">Admission</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Rejoignez l'excellence académique avec nos processus d'admission simplifiés et transparents
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-estim-green/20 flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-estim-green" />
                </div>
                <h2 className="text-2xl font-bold text-estim-green">Admission Post-Bac</h2>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-gold mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Baccalauréat toutes séries confondues</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-gold mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Dossier de candidature complet</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-gold mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Entretien de motivation</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-gold mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Test d'aptitude (selon filière)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-estim-gold/20 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-estim-gold" />
                </div>
                <h2 className="text-2xl font-bold text-estim-gold">Admission Parallèle</h2>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-green mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">BTS, DUT ou équivalent</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-green mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Validation des acquis</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-green mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Test d'évaluation</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-estim-green mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Expérience professionnelle valorisée</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-estim-green/10 to-estim-gold/10 rounded-3xl p-10 border border-estim-green/20 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Calendrier 2024-2025</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/50 rounded-2xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-estim-green" />
                </div>
                <div className="font-bold text-xl text-estim-green mb-2">Inscriptions</div>
                <div className="text-gray-700 text-lg">Janvier - Juillet 2024</div>
              </div>
              <div className="text-center bg-white/50 rounded-2xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-estim-gold" />
                </div>
                <div className="font-bold text-xl text-estim-gold mb-2">Entretiens</div>
                <div className="text-gray-700 text-lg">Juin - Août 2024</div>
              </div>
              <div className="text-center bg-white/50 rounded-2xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-estim-green/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-estim-green" />
                </div>
                <div className="font-bold text-xl text-estim-green mb-2">Rentrée</div>
                <div className="text-gray-700 text-lg">Septembre 2024</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Commencez votre inscription</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <Link to="/pre-registration" className="flex-1">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="w-full border-3 border-estim-green text-estim-green hover:bg-estim-green hover:text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Pré-inscription
                </Button>
              </Link>
              <Link to="/complete-registration" className="flex-1">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Inscription complète
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;