
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap, Users, Target, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const TrackDetails = () => {
  const { trackName } = useParams();

  // Données des filières (on pourrait les externaliser dans un fichier séparé)
  const tracksData = {
    'gestion-de-projets': {
      title: 'Gestion de Projets',
      description: 'Formation spécialisée dans la gestion et le pilotage de projets dans différents secteurs d\'activité.',
      duration: '2 ans',
      level: 'Bac+2',
      careers: [
        'Chef de projet',
        'Assistant chef de projet',
        'Coordinateur de projet',
        'Analyste projet',
        'Consultant en organisation',
        'Responsable qualité projet'
      ],
      skills: [
        'Planification et suivi de projet',
        'Gestion des risques',
        'Communication et leadership',
        'Outils de gestion de projet',
        'Analyse et reporting',
        'Gestion budgétaire'
      ],
      program: [
        'Méthodologies de gestion de projet',
        'Outils informatiques spécialisés',
        'Management d\'équipe',
        'Gestion budgétaire et financière',
        'Communication professionnelle',
        'Stage en entreprise'
      ]
    },
    'genie-informatique': {
      title: 'Génie Informatique',
      description: 'Formation complète en développement logiciel, systèmes et réseaux informatiques.',
      duration: '3 ans',
      level: 'Bac+3',
      careers: [
        'Développeur logiciel',
        'Administrateur système',
        'Analyste programmeur',
        'Ingénieur réseau',
        'Consultant IT',
        'Chef de projet technique'
      ],
      skills: [
        'Programmation (Java, Python, C++)',
        'Développement web',
        'Administration système',
        'Réseaux et sécurité',
        'Base de données',
        'Architecture logicielle'
      ],
      program: [
        'Algorithmes et structures de données',
        'Développement web et mobile',
        'Systèmes d\'exploitation',
        'Réseaux et télécommunications',
        'Sécurité informatique',
        'Projet de fin d\'études'
      ]
    }
    // Ajoutez d'autres filières selon les besoins
  };

  const trackKey = trackName?.toLowerCase().replace(/\s+/g, '-');
  const track = tracksData[trackKey] || tracksData['gestion-de-projets'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Retour aux filières</span>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">{track.title}</h1>
              <p className="text-gray-600 text-sm">
                Formation {track.level} - Durée {track.duration}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Description de la formation</h2>
                <p className="text-gray-700 leading-relaxed">{track.description}</p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-estim-green mr-2" />
                  <h3 className="font-semibold text-gray-800">Durée</h3>
                </div>
                <p className="text-gray-600">{track.duration}</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-estim-gold mr-2" />
                  <h3 className="font-semibold text-gray-800">Niveau</h3>
                </div>
                <p className="text-gray-600">{track.level}</p>
              </div>
            </div>

            {/* Program */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Programme de formation</h2>
              <ul className="space-y-3">
                {track.program.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-estim-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Compétences acquises</h2>
              <div className="flex flex-wrap gap-2">
                {track.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-estim-green/15 to-estim-gold/15 text-estim-darkGreen border border-estim-green/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Débouchés professionnels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {track.careers.map((career, index) => (
                  <div key={index} className="flex items-center">
                    <Users className="w-4 h-4 text-estim-gold mr-3" />
                    <span className="text-gray-700 text-sm">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link to="/complete-registration" className="block">
                <Button className="w-full h-14 text-base font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl transition-all">
                  S'inscrire à cette formation
                </Button>
              </Link>
              
              <Link to="/pre-registration" className="block">
                <Button 
                  variant="outline"
                  className="w-full h-14 text-base font-semibold border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white rounded-xl transition-all"
                >
                  Pré-inscription rapide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
