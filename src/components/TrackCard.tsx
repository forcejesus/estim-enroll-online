
import React from 'react';
import { Button } from './ui/button';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  careers: string[];
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, careers }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Card header with decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-estim-green to-estim-gold"></div>
      
      <div className="p-7">
        {/* Icon with animated background */}
        <div className="mb-5 rounded-full p-3 inline-block bg-estim-green/10 text-estim-green group-hover:bg-estim-green group-hover:text-white transition-colors duration-300">
          <div className="text-2xl">
            {icon}
          </div>
        </div>
        
        {/* Title with hover effect */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-estim-green transition-colors">{title}</h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
        
        {/* Careers tags */}
        <div className="mb-6">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Débouchés</h4>
          <div className="flex flex-wrap gap-2">
            {careers.map((career, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-estim-green/20 to-estim-gold/20 text-estim-darkGreen"
              >
                {career}
              </span>
            ))}
          </div>
        </div>
        
        {/* Button with animation */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-estim-green text-estim-green hover:bg-estim-green hover:text-white group-hover:shadow-md transition-all"
        >
          <span>En savoir plus</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TrackCard;
