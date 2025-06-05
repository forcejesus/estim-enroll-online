
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrackBottomSheet from '@/components/TrackBottomSheet';
import SubmissionLoader from '@/components/SubmissionLoader';

const PreRegistrationForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    track: '',
    isSubmitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleTrackSelect = (track: string) => {
    setFormState(prev => ({ ...prev, track }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const response = await fetch('https://gestion.estim-online.com/api/inscription/preinscriptions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formState.lastName,
          prenom: formState.firstName,
          email: formState.email,
          telephone: formState.phone,
          filiere_souhaitee: formState.track
        })
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "✅ Pré-inscription confirmée !",
          description: "Félicitations ! Votre demande a été enregistrée avec succès. Vous recevrez bientôt un email de confirmation avec les prochaines étapes.",
        });
        setFormState({
          lastName: '',
          firstName: '',
          email: '',
          phone: '',
          track: '',
          isSubmitting: false
        });
      } else {
        throw new Error('Erreur lors de la soumission');
      }
    } catch (error) {
      toast({
        title: "❌ Erreur de soumission",
        description: "Nous n'avons pas pu traiter votre pré-inscription. Vérifiez votre connexion et réessayez dans quelques instants.",
        variant: "destructive"
      });
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
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
    <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-estim-green/5 rounded-full blur-2xl"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
          <label className="block text-sm font-semibold text-gray-700">
            Filière souhaitée
          </label>
          <TrackBottomSheet
            value={formState.track}
            onSelect={handleTrackSelect}
            tracks={tracks}
            placeholder="Sélectionnez une filière"
          />
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <SubmissionLoader message="Envoi de votre pré-inscription..." />
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
  );
};

export default PreRegistrationForm;
