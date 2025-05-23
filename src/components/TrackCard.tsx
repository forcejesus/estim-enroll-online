
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
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-estim-green to-estim-gold"></div>
      
      <div className="p-4">
        <div className="flex items-start space-x-3 mb-3">
          <div className="rounded-full p-2 bg-estim-green/10 text-estim-green group-hover:bg-estim-green group-hover:text-white transition-colors duration-300 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold mb-1 group-hover:text-estim-green transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div className="mb-3">
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
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-estim-green text-estim-green hover:bg-estim-green hover:text-white transition-all text-sm"
            >
              <span>En savoir plus</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[95vw] max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="text-lg">{title}</DialogTitle>
              <DialogDescription className="text-sm">
                Formation professionnelle ESTIM
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-gray-700 text-sm">{description}</p>
              <div>
                <h4 className="font-medium mb-2 text-sm">Débouchés professionnels:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {careers.map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Compétences acquises:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Connaissances techniques spécialisées</li>
                  <li>Compétences pratiques professionnelles</li>
                  <li>Capacité d'analyse et de résolution de problèmes</li>
                </ul>
              </div>
            </div>
            <DialogFooter className="flex-col space-y-2">
              <Button 
                type="button" 
                variant="default" 
                className="w-full"
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
