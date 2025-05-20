
import React, { useState } from 'react';
import Button from './ui/Button';
import { useToast } from '@/hooks/use-toast';

const PreRegistrationForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    track: '',
    isSubmitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Pré-inscription réussie",
        description: "Un email de confirmation a été envoyé à votre adresse email.",
      });
      // Reset form
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        track: '',
        isSubmitting: false
      });
    }, 1500);
  };

  const tracks = [
    "Gestion de Projets",
    "Génie Informatique",
    "Maintenance Industrielle",
    "Électricité Industrielle",
    "Langue et Affaires",
    "Secrétariat de Direction",
    "Qualité, Sécurité et Environnement",
    "Ressources Humaines",
    "Comptabilité et Gestion",
  ];

  return (
    <section id="register" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Pré-inscription</h2>
          <p className="section-subtitle">
            Remplissez le formulaire ci-dessous pour réserver votre place dans nos programmes de formation.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formState.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formState.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="track" className="block text-sm font-medium mb-1">
                  Filière souhaitée
                </label>
                <select
                  id="track"
                  name="track"
                  required
                  value={formState.track}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                >
                  <option value="">Sélectionnez une filière</option>
                  {tracks.map((track, index) => (
                    <option key={index} value={track}>
                      {track}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? "Traitement en cours..." : "Soumettre ma pré-inscription"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;
