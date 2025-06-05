
import React from 'react';
import PreRegistrationHeader from '@/components/PreRegistrationHeader';
import PreRegistrationForm from '@/components/PreRegistrationForm';

const PreRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="max-w-md mx-auto">
          <PreRegistrationHeader />
          <PreRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default PreRegistration;
