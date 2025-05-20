
import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Cisco', logo: 'CISCO' },
    { name: 'HP Gold', logo: 'HP GOLD' },
    { name: 'IBM', logo: 'IBM' },
    { name: 'LPIC-1', logo: 'LPIC-1' },
    { name: 'Sage', logo: 'SAGE' },
    { name: 'Java', logo: 'JAVA' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container">
        <h3 className="text-center text-xl text-gray-700 font-medium mb-10 uppercase tracking-wider">Nos Partenaires</h3>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden md:block absolute -top-8 -left-4 w-20 h-20 rounded-full bg-estim-green/10 z-0"></div>
          <div className="hidden md:block absolute -bottom-10 -right-6 w-32 h-32 rounded-full bg-estim-gold/20 z-0"></div>
          
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="h-24 w-full max-w-[180px] flex items-center justify-center bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <span className="text-xl font-bold bg-gradient-to-r from-estim-darkGreen to-estim-green bg-clip-text text-transparent">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#tracks" className="inline-flex items-center text-estim-green hover:text-estim-darkGreen transition-colors">
            <span>Découvrir nos formations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
