
import React from 'react';

interface PreRegistrationFormContainerProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const PreRegistrationFormContainer = ({ children, onSubmit }: PreRegistrationFormContainerProps) => {
  return (
    <div className="glass-effect rounded-3xl shadow-2xl p-8 relative overflow-hidden hover-lift gradient-border">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <form onSubmit={onSubmit} className="space-y-6 relative z-10">
        {children}
      </form>
    </div>
  );
};

export default PreRegistrationFormContainer;
