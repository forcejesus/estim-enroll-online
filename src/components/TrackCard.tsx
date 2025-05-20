
import React from 'react';
import Button from './ui/Button';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  careers: string[];
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, careers }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="mb-4 text-estim-green">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Débouchés</h4>
        <div className="flex flex-wrap gap-2">
          {careers.map((career, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-estim-green/10 text-estim-green"
            >
              {career}
            </span>
          ))}
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="mt-auto">
        En savoir plus
      </Button>
    </div>
  );
};

export default TrackCard;
