
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
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
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
        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all duration-200 text-sm"
      />
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
