
import React from 'react';

interface SubmissionLoaderProps {
  message?: string;
}

const SubmissionLoader = ({ message = "Traitement en cours..." }: SubmissionLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 animate-spin border-t-estim-green"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png" 
            alt="ESTIM Logo" 
            className="w-8 h-8 object-contain animate-pulse"
          />
        </div>
      </div>
      <p className="text-sm font-medium text-gray-600 animate-pulse">{message}</p>
    </div>
  );
};

export default SubmissionLoader;
