
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
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h3 className="text-center text-lg text-muted-foreground mb-6">Nos partenaires</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="h-12 flex items-center justify-center bg-white rounded-md px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-lg font-bold text-gray-700">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
