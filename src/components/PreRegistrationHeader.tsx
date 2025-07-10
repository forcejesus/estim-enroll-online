
import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreRegistrationHeader = () => {
  return (
    <div className="mb-8">
      <Link to="/" className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-medium">Retour à l'accueil</span>
      </Link>
      
      <div className="text-center">
        {/* Logo plus visible */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl shadow-xl border-2 border-estim-green/20 pulse-glow">
            <img
              src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
              alt="ESTIM Logo"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/30 to-estim-gold/30 rounded-2xl blur-xl animate-pulse"></div>
        </div>
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Pré-inscription rapide</h1>
        <p className="text-gray-600 text-sm">
          Rejoignez nos 2000+ diplômés ! Réservez votre place en quelques minutes.
        </p>
      </div>
    </div>
  );
};

export default PreRegistrationHeader;
