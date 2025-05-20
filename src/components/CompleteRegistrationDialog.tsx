
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Book, Calendar, Clock, FileText, FilePlus, Mail, User } from 'lucide-react';

const CompleteRegistrationDialog = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    // Personal information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    birthDate: '',
    
    // Education information
    lastDiploma: '',
    school: '',
    graduationYear: '',
    
    // Track selection
    track: '',
    
    // Payment method
    paymentMethod: 'card',
    
    // Documents
    identityDocument: null,
    diplomaCopy: null,
    resumeFile: null,
    
    // Agreement
    termsAccepted: false,
  });

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormState(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscription réussie",
        description: "Votre inscription a été complétée avec succès. Un email de confirmation a été envoyé.",
      });
      
      // Reset form and close dialog
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        birthDate: '',
        lastDiploma: '',
        school: '',
        graduationYear: '',
        track: '',
        paymentMethod: 'card',
        identityDocument: null,
        diplomaCopy: null,
        resumeFile: null,
        termsAccepted: false,
      });
      setStep(1);
      setIsSubmitting(false);
      document.getElementById('close-dialog')?.click();
    }, 2000);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4 text-estim-green">
              <User size={40} />
            </div>
            <h3 className="text-lg font-medium text-center">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                name="address"
                value={formState.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  name="city"
                  value={formState.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Code postal</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={formState.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Date de naissance</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formState.birthDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4 text-estim-green">
              <Book size={40} />
            </div>
            <h3 className="text-lg font-medium text-center">Parcours éducatif</h3>
            
            <div className="space-y-2">
              <Label htmlFor="lastDiploma">Dernier diplôme obtenu</Label>
              <Input
                id="lastDiploma"
                name="lastDiploma"
                value={formState.lastDiploma}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="school">Établissement</Label>
              <Input
                id="school"
                name="school"
                value={formState.school}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="graduationYear">Année d'obtention</Label>
              <Input
                id="graduationYear"
                name="graduationYear"
                type="number"
                min="1990"
                max="2030"
                value={formState.graduationYear}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="track">Filière souhaitée</Label>
              <select
                id="track"
                name="track"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-estim-green focus:border-estim-green"
                value={formState.track}
                onChange={handleChange}
                required
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
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4 text-estim-green">
              <FilePlus size={40} />
            </div>
            <h3 className="text-lg font-medium text-center">Documents requis</h3>
            
            <div className="space-y-3">
              <Label htmlFor="identityDocument">Pièce d'identité (PDF, JPG)</Label>
              <Input
                id="identityDocument"
                name="identityDocument"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground">Format accepté: PDF ou image (max 5MB)</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="diplomaCopy">Copie du diplôme (PDF, JPG)</Label>
              <Input
                id="diplomaCopy"
                name="diplomaCopy"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground">Format accepté: PDF ou image (max 5MB)</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="resumeFile">CV (PDF)</Label>
              <Input
                id="resumeFile"
                name="resumeFile"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground">Format accepté: PDF uniquement (max 2MB)</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4 text-estim-green">
              <FileText size={40} />
            </div>
            <h3 className="text-lg font-medium text-center">Paiement et validation</h3>
            
            <div className="space-y-4">
              <div>
                <Label className="mb-3 block">Méthode de paiement</Label>
                <RadioGroup 
                  defaultValue="card" 
                  name="paymentMethod" 
                  value={formState.paymentMethod} 
                  onValueChange={(value) => setFormState(prev => ({...prev, paymentMethod: value}))}
                  className="flex flex-col space-y-3"
                >
                  <div className="flex items-center space-x-3 border p-3 rounded-md">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="cursor-pointer flex-1">Carte bancaire</Label>
                    <div className="flex space-x-1">
                      <div className="w-8 h-5 bg-blue-600 rounded"></div>
                      <div className="w-8 h-5 bg-red-500 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 border p-3 rounded-md">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer flex-1">PayPal</Label>
                    <div className="w-8 h-5 bg-blue-800 rounded"></div>
                  </div>
                  
                  <div className="flex items-center space-x-3 border p-3 rounded-md">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="cursor-pointer">Virement bancaire</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <input 
                    type="checkbox" 
                    id="termsAccepted" 
                    name="termsAccepted"
                    checked={formState.termsAccepted}
                    onChange={handleChange}
                    required
                    className="rounded border-gray-300 text-estim-green focus:ring-estim-green"
                  />
                  <Label htmlFor="termsAccepted" className="text-sm">
                    J'accepte les conditions générales et la politique de confidentialité
                  </Label>
                </div>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Frais d'inscription</span>
                    <span className="font-medium">500€</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Frais de dossier</span>
                    <span className="font-medium">50€</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>550€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center w-full max-w-xs">
          {[1, 2, 3, 4].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= stepNumber ? 'bg-estim-green text-white' : 'bg-gray-200'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`flex-1 h-1 ${
                  step > stepNumber ? 'bg-estim-green' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog>
      <DialogTrigger className="hidden" id="complete-registration-trigger">
        Open
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-estim-green">
            Inscription Complète
          </DialogTitle>
          <DialogDescription className="text-center">
            Complétez toutes les étapes pour finaliser votre inscription à ESTIM
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="py-2">
          {renderStepIndicator()}
          {renderStepContent()}
          
          <DialogFooter className="mt-6 flex justify-between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                Précédent
              </Button>
            )}
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Suivant
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting || !formState.termsAccepted} className="ml-auto bg-estim-green hover:bg-estim-darkGreen">
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Traitement...
                  </>
                ) : (
                  "Finaliser l'inscription"
                )}
              </Button>
            )}
          </DialogFooter>
        </form>
        
        <button id="close-dialog" className="hidden" />
      </DialogContent>
    </Dialog>
  );
};

export default CompleteRegistrationDialog;
