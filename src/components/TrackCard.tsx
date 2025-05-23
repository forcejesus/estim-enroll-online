
import React from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
      
      <div className="p-5">
        {/* Icon with animated background */}
        <div className="mb-4 rounded-full p-2 inline-block bg-estim-green/10 text-estim-green group-hover:bg-estim-green group-hover:text-white transition-colors duration-300">
          <div className="text-xl">
            {icon}
          </div>
        </div>
        
        {/* Title with hover effect */}
        <h3 className="text-lg font-bold mb-2 group-hover:text-estim-green transition-colors">{title}</h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{description}</p>
        
        {/* Careers tags - limited to 2 on mobile */}
        <div className="mb-4">
          <h4 className="font-medium text-xs uppercase tracking-wider text-muted-foreground mb-2">Débouchés</h4>
          <div className="flex flex-wrap gap-1">
            {careers.slice(0, 2).map((career, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-estim-green/20 to-estim-gold/20 text-estim-darkGreen"
              >
                {career}
              </span>
            ))}
            {careers.length > 2 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                +{careers.length - 2}
              </span>
            )}
          </div>
        </div>
        
        {/* Dialog for "En savoir plus" */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-estim-green text-estim-green hover:bg-estim-green hover:text-white group-hover:shadow-md transition-all text-sm"
            >
              <span>En savoir plus</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                Formation professionnelle ESTIM
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-gray-700">{description}</p>
              <div>
                <h4 className="font-medium mb-2">Débouchés professionnels:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {careers.map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Compétences acquises:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Connaissances techniques spécialisées</li>
                  <li>Compétences pratiques professionnelles</li>
                  <li>Capacité d'analyse et de résolution de problèmes</li>
                </ul>
              </div>
            </div>
            <DialogFooter className="sm:justify-center">
              <Button 
                type="button" 
                variant="default" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('complete-registration-trigger')?.click()}
              >
                S'inscrire à cette formation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TrackCard;
