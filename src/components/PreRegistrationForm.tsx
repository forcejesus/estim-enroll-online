
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TrackBottomSheet from '@/components/TrackBottomSheet';
import SubmissionLoader from '@/components/SubmissionLoader';
import PreRegistrationFormFields from '@/components/PreRegistrationFormFields';
import { usePreRegistration } from '@/hooks/usePreRegistration';

const PreRegistrationForm = () => {
  const { formState, handleChange, handleTrackSelect, handleSubmit } = usePreRegistration();

  const tracks = [
    "Gestion de Projets",
    "Génie Informatique",
    "Maintenance Industrielle",
    "Électricité Industrielle",
    "Langue et Affaires",
    "Secrétariat de Direction",
    "Qualité, Sécurité et Environnement",
    "Ressources Humaines",
    "Comptabilité et Gestion",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <PreRegistrationFormFields 
          formState={formState}
          onChange={handleChange}
        />

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Filière souhaitée
          </label>
          <TrackBottomSheet
            value={formState.track}
            onSelect={handleTrackSelect}
            tracks={tracks}
            placeholder="Sélectionnez une filière"
          />
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <SubmissionLoader message="Envoi de votre pré-inscription..." />
            ) : (
              "Confirmer ma pré-inscription"
            )}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500 mb-2">
              Envie de finaliser votre inscription maintenant ?
            </p>
            <Link 
              to="/complete-registration" 
              className="text-estim-green hover:text-estim-darkGreen font-semibold text-sm hover:underline transition-colors"
            >
              Inscription complète →
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PreRegistrationForm;
