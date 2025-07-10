import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, GraduationCap, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

type Step = 'personal' | 'academic' | 'documents' | 'confirmation';

const CompleteRegistration = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Informations académiques
    track: '',
    previousEducation: '',
    baccalaureateType: '',
    baccalaureateYear: '',
    university: '',
    motivation: '',
    
    // Documents
    photoUploaded: false,
    baccalaureateUploaded: false,
    transcriptUploaded: false,
    idCardUploaded: false,
  });

  const steps = [
    { id: 'personal', title: 'Informations personnelles', icon: User, completed: false },
    { id: 'academic', title: 'Parcours académique', icon: GraduationCap, completed: false },
    { id: 'documents', title: 'Documents', icon: FileText, completed: false },
    { id: 'confirmation', title: 'Confirmation', icon: CheckCircle, completed: false },
  ];

  const tracks = [
    'Génie Informatique',
    'Réseaux et Télécommunications',
    'Management',
    'Finance et Comptabilité',
    'Marketing Digital',
    'Commerce International',
    'Génie Civil',
    'Architecture',
    'Design Graphique'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepCompleted = (step: Step): boolean => {
    switch (step) {
      case 'personal':
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 'academic':
        return !!(formData.track && formData.baccalaureateType && formData.baccalaureateYear);
      case 'documents':
        return formData.photoUploaded && formData.baccalaureateUploaded && formData.transcriptUploaded;
      case 'confirmation':
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
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
          date_naissance: formData.dateOfBirth,
          filiere_souhaitee: formData.track,
          dernier_diplome: formData.baccalaureateType,
          annee_obtention: parseInt(formData.baccalaureateYear) || 0,
          dernier_etablissement: formData.university,
          adresse_complete: formData.address,
          ville: formData.city,
          motivation: formData.motivation,
        })
      });

      if (response.ok) {
        toast({
          title: "🎉 Félicitations !",
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-estim-green">Votre inscription complète a été soumise avec succès !</p>
              <p className="text-sm text-gray-600">
                Notre équipe d'admission examinera votre dossier et vous contactera sous 48h pour les prochaines étapes.
              </p>
              <p className="text-xs text-estim-gold font-medium">ESTIM je t'estime !</p>
            </div>
          ),
          className: "border-estim-green/30 bg-gradient-to-br from-white to-estim-green/5 shadow-2xl max-w-md",
        });
      } else {
        throw new Error('Erreur lors de la soumission');
      }
    } catch (error) {
      toast({
        title: "❌ Erreur d'inscription",
        description: "Impossible de finaliser votre inscription. Vérifiez vos informations et réessayez.",
        variant: "destructive"
      });
    }
  };

  const renderPersonalInfo = () => (
    <Card className="glass-effect border-estim-green/20">
      <CardHeader>
        <CardTitle className="text-estim-green flex items-center">
          <User className="mr-2 w-5 h-5" />
          Informations personnelles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Prénom *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="mt-1"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Nom *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="mt-1"
              placeholder="Votre nom"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="mt-1"
              placeholder="votre.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-1"
              placeholder="+212 6XX XXX XXX"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="dateOfBirth">Date de naissance</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="mt-1"
            placeholder="Votre adresse complète"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">Ville</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="mt-1"
              placeholder="Casablanca, Rabat..."
            />
          </div>
          <div>
            <Label htmlFor="postalCode">Code postal</Label>
            <Input
              id="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}
              className="mt-1"
              placeholder="20000"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAcademicInfo = () => (
    <Card className="glass-effect border-estim-green/20">
      <CardHeader>
        <CardTitle className="text-estim-green flex items-center">
          <GraduationCap className="mr-2 w-5 h-5" />
          Parcours académique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="track">Filière souhaitée *</Label>
          <Select value={formData.track} onValueChange={(value) => handleInputChange('track', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choisissez votre filière" />
            </SelectTrigger>
            <SelectContent>
              {tracks.map((track) => (
                <SelectItem key={track} value={track}>{track}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="baccalaureateType">Type de baccalauréat *</Label>
          <Select value={formData.baccalaureateType} onValueChange={(value) => handleInputChange('baccalaureateType', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Type de baccalauréat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sciences-maths">Sciences Mathématiques</SelectItem>
              <SelectItem value="sciences-physiques">Sciences Physiques</SelectItem>
              <SelectItem value="sciences-svt">Sciences de la Vie et de la Terre</SelectItem>
              <SelectItem value="lettres">Lettres et Sciences Humaines</SelectItem>
              <SelectItem value="economie">Sciences Économiques</SelectItem>
              <SelectItem value="technique">Technique</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="baccalaureateYear">Année d'obtention du baccalauréat *</Label>
          <Select value={formData.baccalaureateYear} onValueChange={(value) => handleInputChange('baccalaureateYear', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Année d'obtention" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="previousEducation">Formation antérieure (si applicable)</Label>
          <Input
            id="previousEducation"
            value={formData.previousEducation}
            onChange={(e) => handleInputChange('previousEducation', e.target.value)}
            className="mt-1"
            placeholder="DUT, BTS, Licence..."
          />
        </div>
        
        <div>
          <Label htmlFor="university">Établissement précédent (si applicable)</Label>
          <Input
            id="university"
            value={formData.university}
            onChange={(e) => handleInputChange('university', e.target.value)}
            className="mt-1"
            placeholder="Nom de l'établissement"
          />
        </div>
        
        <div>
          <Label htmlFor="motivation">Lettre de motivation</Label>
          <Textarea
            id="motivation"
            value={formData.motivation}
            onChange={(e) => handleInputChange('motivation', e.target.value)}
            className="mt-1 min-h-[120px]"
            placeholder="Pourquoi souhaitez-vous rejoindre ESTIM ? Quels sont vos objectifs professionnels ?"
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderDocuments = () => (
    <Card className="glass-effect border-estim-green/20">
      <CardHeader>
        <CardTitle className="text-estim-green flex items-center">
          <FileText className="mr-2 w-5 h-5" />
          Documents requis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 border-2 border-dashed border-estim-green/30 rounded-lg bg-estim-green/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Photo d'identité *</h4>
                <p className="text-sm text-gray-600">Format JPG ou PNG, max 2MB</p>
              </div>
              <Button 
                variant="outline" 
                className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white"
                onClick={() => handleInputChange('photoUploaded', 'true')}
              >
                {formData.photoUploaded ? 'Modifiée ✓' : 'Télécharger'}
              </Button>
            </div>
          </div>
          
          <div className="p-4 border-2 border-dashed border-estim-green/30 rounded-lg bg-estim-green/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Copie du baccalauréat *</h4>
                <p className="text-sm text-gray-600">Document officiel scanné</p>
              </div>
              <Button 
                variant="outline" 
                className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white"
                onClick={() => handleInputChange('baccalaureateUploaded', 'true')}
              >
                {formData.baccalaureateUploaded ? 'Téléchargé ✓' : 'Télécharger'}
              </Button>
            </div>
          </div>
          
          <div className="p-4 border-2 border-dashed border-estim-green/30 rounded-lg bg-estim-green/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Relevé de notes *</h4>
                <p className="text-sm text-gray-600">Derniers relevés de notes obtenus</p>
              </div>
              <Button 
                variant="outline" 
                className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white"
                onClick={() => handleInputChange('transcriptUploaded', 'true')}
              >
                {formData.transcriptUploaded ? 'Téléchargé ✓' : 'Télécharger'}
              </Button>
            </div>
          </div>
          
          <div className="p-4 border-2 border-dashed border-estim-green/30 rounded-lg bg-estim-green/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Pièce d'identité</h4>
                <p className="text-sm text-gray-600">CIN ou passeport (optionnel)</p>
              </div>
              <Button 
                variant="outline" 
                className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white"
                onClick={() => handleInputChange('idCardUploaded', 'true')}
              >
                {formData.idCardUploaded ? 'Téléchargé ✓' : 'Télécharger'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderConfirmation = () => (
    <Card className="glass-effect border-estim-green/20">
      <CardHeader>
        <CardTitle className="text-estim-green flex items-center">
          <CheckCircle className="mr-2 w-5 h-5" />
          Confirmation de votre inscription
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-estim-green/10 to-estim-gold/10 p-6 rounded-2xl border border-estim-green/20">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Récapitulatif de votre demande</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Nom complet:</span>
              <span className="font-medium">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Filière:</span>
              <span className="font-medium">{formData.track}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Baccalauréat:</span>
              <span className="font-medium">{formData.baccalaureateType} ({formData.baccalaureateYear})</span>
            </div>
          </div>
        </div>
        
        <div className="bg-estim-gold/10 p-6 rounded-2xl border border-estim-gold/20">
          <h4 className="font-semibold text-gray-800 mb-2">Prochaines étapes</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Vous recevrez un email de confirmation dans les 24h</li>
            <li>• Notre équipe examinera votre dossier sous 3-5 jours ouvrables</li>
            <li>• Vous serez contacté(e) pour un entretien si votre profil correspond</li>
            <li>• Les résultats d'admission seront communiqués par email</li>
          </ul>
        </div>
        
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-estim-green/20 to-estim-gold/20 rounded-full border border-estim-green/30">
            <span className="text-estim-green font-semibold text-sm">ESTIM je t'estime !</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return renderPersonalInfo();
      case 'academic':
        return renderAcademicInfo();
      case 'documents':
        return renderDocuments();
      case 'confirmation':
        return renderConfirmation();
      default:
        return renderPersonalInfo();
    }
  };

  const nextStep = () => {
    const stepOrder: Step[] = ['personal', 'academic', 'documents', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const stepOrder: Step[] = ['personal', 'academic', 'documents', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-estim-green hover:text-estim-darkGreen mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
          
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Inscription complète à <span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">ESTIM</span>
            </h1>
            <p className="text-gray-600">
              Complétez votre dossier d'inscription en quelques étapes simples
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Steps */}
          <div className="lg:col-span-1">
            <Card className="glass-effect border-estim-green/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg text-estim-green">Étapes d'inscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = isStepCompleted(step.id as Step);
                    
                    return (
                      <div
                        key={step.id}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-estim-green/20 to-estim-gold/20 border border-estim-green/30'
                            : isCompleted
                            ? 'bg-estim-green/10 border border-estim-green/20'
                            : 'hover:bg-gray-50 border border-transparent'
                        }`}
                        onClick={() => setCurrentStep(step.id as Step)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isActive
                            ? 'bg-estim-green text-white'
                            : isCompleted
                            ? 'bg-estim-green text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <StepIcon className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${
                            isActive || isCompleted ? 'text-estim-green' : 'text-gray-600'
                          }`}>
                            {step.title}
                          </p>
                        </div>
                        {(isActive || isCompleted) && (
                          <ChevronRight className="w-4 h-4 text-estim-green" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {renderStepContent()}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 'personal'}
                  className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white"
                >
                  Précédent
                </Button>

                <div className="text-center">
                  <span className="text-sm text-gray-500">
                    Étape {['personal', 'academic', 'documents', 'confirmation'].indexOf(currentStep) + 1} sur 4
                  </span>
                </div>

                {currentStep === 'confirmation' ? (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white"
                  >
                    Finaliser l'inscription
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepCompleted(currentStep)}
                    className="bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white"
                  >
                    Suivant
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;