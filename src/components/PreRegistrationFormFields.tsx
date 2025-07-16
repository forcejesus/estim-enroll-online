
import React from 'react';
import { Mail, User, Phone } from 'lucide-react';

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  required?: boolean;
}

const FormField = ({ id, name, type, label, placeholder, value, onChange, icon, required = true }: FormFieldProps) => (
  <div className="space-y-3 group">
    <label htmlFor={id} className="block text-sm font-bold text-gray-800 group-focus-within:text-estim-green transition-colors duration-300">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-estim-green transition-colors duration-300 z-10">
        {icon}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-estim-green/20 focus:border-estim-green transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 shadow-sm hover:shadow-md focus:shadow-lg"
      />
      {/* Focus indicator */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-estim-green/5 to-estim-gold/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
);

interface PreRegistrationFormFieldsProps {
  formState: {
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PreRegistrationFormFields = ({ formState, onChange }: PreRegistrationFormFieldsProps) => {
  return (
    <>
      <FormField
        id="lastName"
        name="lastName"
        type="text"
        label="Nom"
        placeholder="Votre nom"
        value={formState.lastName}
        onChange={onChange}
        icon={<User />}
      />
      
      <FormField
        id="firstName"
        name="firstName"
        type="text"
        label="Prénom"
        placeholder="Votre prénom"
        value={formState.firstName}
        onChange={onChange}
        icon={<User />}
      />

      <FormField
        id="email"
        name="email"
        type="email"
        label="Adresse email"
        placeholder="votre@email.com"
        value={formState.email}
        onChange={onChange}
        icon={<Mail />}
      />
      
      <FormField
        id="phone"
        name="phone"
        type="tel"
        label="Numéro de téléphone"
        placeholder="Votre numéro de téléphone"
        value={formState.phone}
        onChange={onChange}
        icon={<Phone />}
      />
    </>
  );
};

export default PreRegistrationFormFields;
