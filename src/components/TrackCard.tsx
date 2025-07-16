
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  careers: string[];
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, careers }) => {
  const trackSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/20">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-estim-green to-estim-gold"></div>
      
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-estim-green/5 to-estim-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 p-8">
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-estim-green/20 to-estim-gold/20 text-estim-green group-hover:from-estim-green group-hover:to-estim-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold mb-3 group-hover:text-estim-green transition-colors leading-tight">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Careers section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-estim-green to-estim-gold rounded-full"></div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-estim-green">Métiers visés</h4>
          </div>
          <div className="space-y-2">
            {careers.map((career, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-sm text-gray-700 hover:text-estim-green transition-colors duration-200 group/item"
              >
                <div className="w-1.5 h-1.5 bg-estim-gold rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                <span className="font-medium">{career}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action button */}
        <div className="pt-4 border-t border-gray-100 group-hover:border-estim-green/20 transition-colors duration-300">
          <Link to={`/track/${trackSlug}`} className="block">
            <Button 
              variant="outline" 
              size="default"
              className="w-full border-2 border-estim-green/30 text-estim-green hover:bg-gradient-to-r hover:from-estim-green hover:to-estim-gold hover:text-white hover:border-transparent transition-all duration-300 rounded-2xl font-semibold py-3 group-hover:scale-105"
            >
              Découvrir la filière
            </Button>
          </Link>
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default TrackCard;
