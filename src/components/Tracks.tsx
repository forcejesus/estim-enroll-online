import React from 'react';
import TrackCard from './TrackCard';

const icons = {
  management: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  it: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  ),
  maintenance: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  electrical: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
      <path d="m6 17 3.93-4.57c.6-.7.67-1.2 1.17-1.7a3 3 0 0 1 4.91 2.94C16 14 17.3 14.2 18 14.6a1 1 0 0 1 .03 1.89"></path>
      <path d="M15 9h.01"></path>
    </svg>
  ),
  language: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8l6 6"></path>
      <path d="m4 14 6-6 2-3"></path>
      <path d="M2 5h12"></path>
      <path d="M7 2h1"></path>
      <path d="m22 22-5-10-5 10"></path>
      <path d="M14 18h6"></path>
    </svg>
  ),
  secretary: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
      <path d="M17 21h-1a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1"></path>
      <path d="M12 7v10"></path>
      <path d="M3 7h3"></path>
      <path d="M21 17h-3"></path>
    </svg>
  ),
  qhse: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  ),
  hr: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  accounting: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      <path d="M14 8H9"></path>
      <path d="M16 12H9"></path>
      <path d="M12 16H9"></path>
    </svg>
  )
};

const Tracks = () => {
  const tracksData = [
    {
      title: "Gestion de Projets",
      description: "Formation approfondie en méthodologies de gestion de projets, outils de planification et techniques de leadership.",
      icon: icons.management,
      careers: ["Chef de projet", "Consultant", "Planificateur"],
    },
    {
      title: "Génie Informatique",
      description: "Développement de compétences en programmation, réseaux, sécurité informatique et intelligence artificielle.",
      icon: icons.it,
      careers: ["Développeur", "Administrateur système", "Architecte IT"],
    },
    {
      title: "Maintenance Industrielle",
      description: "Techniques de maintenance préventive et corrective, automatisation et gestion des équipements industriels.",
      icon: icons.maintenance,
      careers: ["Technicien de maintenance", "Responsable technique", "Superviseur"],
    },
    {
      title: "Électricité Industrielle",
      description: "Conception, installation et maintenance des systèmes électriques industriels et automatismes.",
      icon: icons.electrical,
      careers: ["Électrotechnicien", "Automaticien", "Chef d'équipe"],
    },
    {
      title: "Langue et Affaires",
      description: "Maîtrise des langues étrangères appliquées au monde des affaires et du commerce international.",
      icon: icons.language,
      careers: ["Traducteur commercial", "Chargé de relation internationale", "Négociateur"],
    },
    {
      title: "Secrétariat de Direction",
      description: "Compétences administratives avancées, communication professionnelle et gestion organisationnelle.",
      icon: icons.secretary,
      careers: ["Assistant(e) de direction", "Office manager", "Coordinateur administratif"],
    },
    {
      title: "Qualité, Sécurité et Environnement",
      description: "Mise en place et audit de systèmes de management QHSE, normes ISO et réglementations environnementales.",
      icon: icons.qhse,
      careers: ["Responsable QHSE", "Auditeur", "Consultant en conformité"],
    },
    {
      title: "Ressources Humaines",
      description: "Gestion du personnel, recrutement, formation, droit du travail et développement organisationnel.",
      icon: icons.hr,
      careers: ["Responsable RH", "Chargé de recrutement", "Consultant"],
    },
    {
      title: "Comptabilité et Gestion",
      description: "Techniques comptables, analyse financière, contrôle de gestion et fiscalité des entreprises.",
      icon: icons.accounting,
      careers: ["Comptable", "Contrôleur de gestion", "Auditeur financier"],
    },
  ];

  return (
    <section id="tracks" className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-800">
            Nos Filières de Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos programmes de formation d'excellence conçus pour répondre aux besoins du marché et vous préparer aux métiers de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {tracksData.map((track, index) => (
            <TrackCard
              key={index}
              title={track.title}
              description={track.description}
              icon={track.icon}
              careers={track.careers}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
