
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Check, Edit, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SubmissionLoader from '@/components/SubmissionLoader';

const CompleteRegistrationPreview = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formData = location.state?.formData || {};

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://gestion.estim-online.com/api/inscription/dossiers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.lastName,
          prenom: formData.firstName,
          email: formData.email,
          telephone: formData.phone,
          date_naissance: formData.birthDate,
          lieu_naissance: formData.birthPlace,
          filiere_souhaitee: formData.track,
          dernier_diplome: formData.lastDiploma,
          annee_obtention: parseInt(formData.graduationYear) || 0,
          dernier_etablissement: formData.institution,
          adresse_complete: formData.address,
          ville: formData.city,
          motivation: formData.motivation,
          possede_ordinateur: formData.hasComputer === 'Oui'
        })
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Inscription réussie",
          description: `Votre inscription complète a été enregistrée avec succès. ID: ${result.id}`,
        });
        navigate('/');
      } else {
        throw new Error('Erreur lors de la soumission');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre inscription. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = () => {
    navigate('/complete-registration', { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={handleEdit}
              className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Modifier</span>
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Vérification inscription</h1>
              <p className="text-gray-600 text-sm">
                Vérifiez vos informations avant l'envoi
              </p>
            </div>
          </div>

          {/* Preview Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-estim-green" />
                  Informations personnelles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nom:</span>
                    <span className="font-medium">{formData.lastName || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prénom:</span>
                    <span className="font-medium">{formData.firstName || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.email || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Téléphone:</span>
                    <span className="font-medium">{formData.phone || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date de naissance:</span>
                    <span className="font-medium">{formData.birthDate || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lieu de naissance:</span>
                    <span className="font-medium">{formData.birthPlace || 'Non renseigné'}</span>
                  </div>
                </div>
              </div>

              {/* Education Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Formation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Filière souhaitée:</span>
                    <span className="font-medium">{formData.track || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dernier diplôme:</span>
                    <span className="font-medium">{formData.lastDiploma || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Année d'obtention:</span>
                    <span className="font-medium">{formData.graduationYear || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Établissement:</span>
                    <span className="font-medium">{formData.institution || 'Non renseigné'}</span>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Adresse</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Adresse:</span>
                    <span className="font-medium">{formData.address || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ville:</span>
                    <span className="font-medium">{formData.city || 'Non renseigné'}</span>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations complémentaires</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ordinateur:</span>
                    <span className="font-medium">{formData.hasComputer || 'Non renseigné'}</span>
                  </div>
                  {formData.motivation && (
                    <div>
                      <span className="text-gray-600 block">Motivation:</span>
                      <span className="font-medium">{formData.motivation}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full h-14 text-base font-semibold bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white rounded-xl transition-all"
            >
              {isSubmitting ? (
                <SubmissionLoader message="Envoi de votre inscription..." />
              ) : (
                "Envoyer l'inscription"
              )}
            </Button>

            <Button
              onClick={handleEdit}
              variant="outline"
              disabled={isSubmitting}
              className="w-full h-14 text-base font-semibold border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white rounded-xl transition-all"
            >
              <Edit className="w-5 h-5 mr-2" />
              Modifier les informations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistrationPreview;
