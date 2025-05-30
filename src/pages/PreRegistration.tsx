
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowLeft, User, Phone, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreRegistration = () => {
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
    
    setTimeout(() => {
      toast({
        title: "Pré-inscription réussie",
        description: "Un email de confirmation a été envoyé à votre adresse email.",
      });
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
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Pré-inscription rapide</h1>
              <p className="text-gray-600 text-sm">
                Réservez votre place en quelques minutes et recevez toutes les informations nécessaires.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    Prénom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                    Nom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={formState.lastName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                  Numéro de téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Votre numéro de téléphone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="track" className="block text-sm font-semibold text-gray-700">
                  Filière souhaitée
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="track"
                    name="track"
                    required
                    value={formState.track}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm appearance-none bg-white"
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

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Traitement en cours...
                    </div>
                  ) : (
                    "Confirmer ma pré-inscription"
                  )}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500 mb-2">
                    Envie de finaliser votre inscription maintenant ?
                  </p>
                  <Link 
                    to="/complete-registration" 
                    className="text-estim-green hover:text-estim-darkGreen font-semibold text-sm hover:underline transition-colors"
                  >
                    Inscription complète →
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegistration;
