import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, User, Mail, Phone, GraduationCap, FileText, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import TrackBottomSheet from '@/components/TrackBottomSheet';
import BirthDateInputs from '@/components/BirthDateInputs';
import SubmissionLoader from '@/components/SubmissionLoader';

const CompleteRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Charger les données existantes si elles sont passées depuis l'aperçu
  const existingData = location.state?.formData || {};
  
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: existingData.firstName || '',
    lastName: existingData.lastName || '',
    email: existingData.email || '',
    phone: existingData.phone || '',
    birthDay: existingData.birthDay || (existingData.birthDate ? existingData.birthDate.split('-')[2] : ''),
    birthMonth: existingData.birthMonth || (existingData.birthDate ? existingData.birthDate.split('-')[1] : ''),
    birthYear: existingData.birthYear || (existingData.birthDate ? existingData.birthDate.split('-')[0] : ''),
    birthPlace: existingData.birthPlace || '',
    nationality: existingData.nationality || '',
    // Education
    lastDiploma: existingData.lastDiploma || '',
    graduationYear: existingData.graduationYear || '',
    institution: existingData.institution || '',
    track: existingData.track || '',
    // Address
    address: existingData.address || '',
    city: existingData.city || '',
    // Additional
    motivation: existingData.motivation || '',
    hasComputer: existingData.hasComputer === 'Oui' || existingData.hasComputer === true || false,
    isSubmitting: false
  });

  const tracks = ["Gestion de Projets", "Génie Informatique", "Maintenance Industrielle", "Électricité Industrielle", "Langue et Affaires", "Secrétariat de Direction", "Qualité, Sécurité et Environnement", "Ressources Humaines", "Comptabilité et Gestion"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (field: 'birthDay' | 'birthMonth' | 'birthYear', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTrackSelect = (track: string) => {
    setFormData(prev => ({
      ...prev,
      track
    }));
  };

  const handleComputerChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      hasComputer: checked
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setFormData(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const birthDate = formData.birthYear && formData.birthMonth && formData.birthDay 
        ? `${formData.birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`
        : '';

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
          date_naissance: birthDate,
          lieu_naissance: formData.birthPlace,
          filiere_souhaitee: formData.track,
          dernier_diplome: formData.lastDiploma,
          annee_obtention: parseInt(formData.graduationYear) || 0,
          dernier_etablissement: formData.institution,
          adresse_complete: formData.address,
          ville: formData.city,
          motivation: formData.motivation,
          possede_ordinateur: formData.hasComputer
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
      setFormData(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const goToPreview = () => {
    // Construire la date complète pour l'aperçu
    const birthDate = formData.birthYear && formData.birthMonth && formData.birthDay 
      ? `${formData.birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`
      : '';
    
    const finalFormData = {
      ...formData,
      birthDate,
      hasComputer: formData.hasComputer ? 'Oui' : 'Non'
    };
    
    navigate('/complete-registration-preview', {
      state: { formData: finalFormData, onSubmit: handleSubmit }
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Informations personnelles</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Prénom</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Nom</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro"
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
                />
              </div>
            </div>

            <BirthDateInputs
              day={formData.birthDay}
              month={formData.birthMonth}
              year={formData.birthYear}
              onChange={handleDateChange}
            />
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Lieu de naissance</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="birthPlace"
                  type="text"
                  required
                  value={formData.birthPlace}
                  onChange={handleChange}
                  placeholder="Ville"
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Formation et filière</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Filière souhaitée</label>
              <TrackBottomSheet
                value={formData.track}
                onSelect={handleTrackSelect}
                tracks={tracks}
                placeholder="Choisissez une filière"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Dernier diplôme obtenu</label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="lastDiploma"
                  required
                  value={formData.lastDiploma}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base appearance-none bg-white"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Baccalauréat">Baccalauréat</option>
                  <option value="BTS">BTS</option>
                  <option value="DUT">DUT</option>
                  <option value="License">License</option>
                  <option value="Master">Master</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Année d'obtention</label>
              <input
                name="graduationYear"
                type="number"
                min="1990"
                max="2025"
                required
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="2023"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Établissement</label>
              <input
                name="institution"
                type="text"
                required
                value={formData.institution}
                onChange={handleChange}
                placeholder="Nom de l'établissement"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Adresse et contact</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Adresse complète</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Votre adresse complète"
                  rows={3}
                  className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base resize-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Ville</label>
              <input
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Votre ville"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Finalisation</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Motivation</label>
              <textarea
                name="motivation"
                required
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Pourquoi souhaitez-vous intégrer cette formation ?"
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-base resize-none"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Disposez-vous d'un ordinateur ?</label>
              <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl">
                <Switch
                  checked={formData.hasComputer}
                  onCheckedChange={handleComputerChange}
                  className="data-[state=checked]:bg-estim-green"
                />
                <span className="text-sm font-medium text-gray-700">
                  {formData.hasComputer ? 'Oui, j\'ai un ordinateur' : 'Non, je n\'ai pas d\'ordinateur'}
                </span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Inscription complète</h1>
              <p className="text-gray-600 text-sm">
                Étape {currentStep} sur 4 - Complétez votre dossier d'inscription
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step <= currentStep
                      ? 'bg-estim-green text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-estim-green to-estim-gold h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {renderStep()}

              {/* Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-col space-y-3">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrev}
                      className="w-full py-3 border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white transition-all"
                    >
                      Précédent
                    </Button>
                  )}
                  
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full py-3 bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white transition-all"
                    >
                      Suivant
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        type="button"
                        onClick={goToPreview}
                        variant="outline"
                        className="w-full py-3 border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white transition-all"
                      >
                        Aperçu avant envoi
                      </Button>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={formData.isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white transition-all"
                      >
                        {formData.isSubmitting ? (
                          <SubmissionLoader message="Envoi de votre inscription..." />
                        ) : (
                          "Envoyer l'inscription"
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
