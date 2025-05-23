
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

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
    <section id="register" className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-estim-green/20 text-estim-green mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Pré-inscription rapide</h2>
            <p className="text-sm text-muted-foreground">
              Remplissez ce formulaire pour réserver votre place et recevoir plus d'informations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-5 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-estim-green/5 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-estim-gold/5 rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 gap-4">
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
                    placeholder="Votre prénom"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green text-base"
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
                    placeholder="Votre nom"
                    value={formState.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green text-base"
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
                    placeholder="Votre numéro de téléphone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green text-base"
                  />
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
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green text-base"
                  >
                    <option value="">Sélectionnez une filière</option>
                    {tracks.map((track, index) => (
                      <option key={index} value={track}>
                        {track}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="default"
                  size="lg" 
                  className="w-full bg-estim-green hover:bg-estim-darkGreen text-base"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? "Traitement en cours..." : "Soumettre ma pré-inscription"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Envie de finaliser votre inscription maintenant ?{" "}
                  <button 
                    type="button" 
                    className="text-estim-green hover:underline font-medium" 
                    onClick={() => document.getElementById('complete-registration-trigger')?.click()}
                  >
                    Inscription complète
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;
