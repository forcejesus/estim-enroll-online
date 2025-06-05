import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Check, Edit, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CompleteRegistrationPreview = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formData = location.state?.formData || {};

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Inscription complète réussie",
        description: "Votre dossier a été soumis avec succès. Vous recevrez une confirmation par email.",
      });
      setIsSubmitting(false);
      navigate('/');
    }, 2000);
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
              <h1 className="text-2xl font-bold mb-2">Vérification des données</h1>
              <p className="text-gray-600 text-sm">
                Vérifiez vos informations avant l'envoi final
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
                    <span className="text-gray-600">Prénom:</span>
                    <span className="font-medium">{formData.firstName || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nom:</span>
                    <span className="font-medium">{formData.lastName || 'Non renseigné'}</span>
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
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Formation et filière</h3>
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
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Adresse</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 block">Adresse complète:</span>
                    <span className="font-medium">{formData.address || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ville:</span>
                    <span className="font-medium">{formData.city || 'Non renseigné'}</span>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations complémentaires</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 block">Motivation:</span>
                    <span className="font-medium">{formData.motivation || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ordinateur disponible:</span>
                    <span className="font-medium">{formData.hasComputer || 'Non renseigné'}</span>
                  </div>
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
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </div>
              ) : (
                "Envoyer"
              )}
            </Button>

            <Button
              onClick={handleEdit}
              variant="outline"
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
