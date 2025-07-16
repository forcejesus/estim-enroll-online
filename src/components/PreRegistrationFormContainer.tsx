
import React from 'react';

interface PreRegistrationFormContainerProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const PreRegistrationFormContainer = ({ children, onSubmit }: PreRegistrationFormContainerProps) => {
  return (
    <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500 overflow-hidden group">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-estim-gold/10 to-estim-green/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-estim-green/20 via-transparent to-estim-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <form onSubmit={onSubmit} className="space-y-8 relative z-10">
        {children}
      </form>
    </div>
  );
};

export default PreRegistrationFormContainer;
