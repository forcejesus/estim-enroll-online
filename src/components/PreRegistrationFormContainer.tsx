
import React from 'react';

interface PreRegistrationFormContainerProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const PreRegistrationFormContainer = ({ children, onSubmit }: PreRegistrationFormContainerProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
      
      <form onSubmit={onSubmit} className="space-y-6 relative z-10">
        {children}
      </form>
    </div>
  );
};

export default PreRegistrationFormContainer;
