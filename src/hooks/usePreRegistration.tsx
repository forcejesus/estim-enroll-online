
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface PreRegistrationData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  track: string;
}

export const usePreRegistration = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<PreRegistrationData & { isSubmitting: boolean }>({
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
        toast({
          title: "🎉 Félicitations !",
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-estim-green">Votre pré-inscription a été confirmée avec succès !</p>
              <p className="text-sm text-gray-600">
                Bienvenue dans la famille ESTIM ! Vous recevrez bientôt un email de confirmation avec toutes les informations nécessaires pour la suite de votre parcours.
              </p>
              <p className="text-xs text-estim-gold font-medium">ESTIM je t'estime !</p>
            </div>
          ),
          className: "border-estim-green/30 bg-gradient-to-br from-white to-estim-green/5 shadow-2xl max-w-md",
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

  return {
    formState,
    handleChange,
    handleTrackSelect,
    handleSubmit
  };
};
