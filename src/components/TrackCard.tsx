
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
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-estim-green to-estim-gold"></div>
      
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="rounded-xl p-3 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 text-estim-green group-hover:from-estim-green group-hover:to-estim-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold mb-2 group-hover:text-estim-green transition-colors leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">Débouchés professionnels</h4>
          <div className="flex flex-wrap gap-2">
            {careers.slice(0, 2).map((career, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-estim-green/15 to-estim-gold/15 text-estim-darkGreen border border-estim-green/20"
              >
                {career}
              </span>
            ))}
            {careers.length > 2 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                +{careers.length - 2} autres
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link to={`/track/${trackSlug}`} className="flex-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white transition-all duration-300 rounded-xl font-semibold"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
