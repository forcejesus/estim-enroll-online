
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Check, Edit, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PreRegistrationPreview = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formData = location.state?.formData || {};

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Pré-inscription réussie",
        description: "Votre pré-inscription a été enregistrée avec succès. Vous recevrez un email de confirmation.",
      });
      setIsSubmitting(false);
      navigate('/');
    }, 2000);
  };

  const handleEdit = () => {
    navigate('/pre-registration', { state: { formData } });
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
              <h1 className="text-2xl font-bold mb-2">Vérification pré-inscription</h1>
              <p className="text-gray-600 text-sm">
                Vérifiez vos informations avant l'envoi
              </p>
            </div>
          </div>

          {/* Preview Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-estim-green" />
                  Informations de pré-inscription
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nom complet:</span>
                    <span className="font-medium">{formData.fullName || 'Non renseigné'}</span>
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
                    <span className="text-gray-600">Filière souhaitée:</span>
                    <span className="font-medium">{formData.track || 'Non renseigné'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niveau d'études:</span>
                    <span className="font-medium">{formData.educationLevel || 'Non renseigné'}</span>
                  </div>
                  {formData.message && (
                    <div>
                      <span className="text-gray-600 block">Message:</span>
                      <span className="font-medium">{formData.message}</span>
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

export default PreRegistrationPreview;
