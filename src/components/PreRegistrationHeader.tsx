
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
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Pré-inscription rapide</h1>
        <p className="text-gray-600 text-sm">
          Réservez votre place en quelques minutes et recevez toutes les informations nécessaires.
        </p>
      </div>
    </div>
  );
};

export default PreRegistrationHeader;
