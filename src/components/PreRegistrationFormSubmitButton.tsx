
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SubmissionLoader from '@/components/SubmissionLoader';

interface PreRegistrationFormSubmitButtonProps {
  isSubmitting: boolean;
}

const PreRegistrationFormSubmitButton = ({ isSubmitting }: PreRegistrationFormSubmitButtonProps) => {
  return (
    <div className="pt-4">
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
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
  );
};

export default PreRegistrationFormSubmitButton;
