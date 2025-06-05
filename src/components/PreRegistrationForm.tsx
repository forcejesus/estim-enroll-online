
import React from 'react';
import PreRegistrationFormFields from '@/components/PreRegistrationFormFields';
import PreRegistrationFormContainer from '@/components/PreRegistrationFormContainer';
import PreRegistrationFormSubmitButton from '@/components/PreRegistrationFormSubmitButton';
import PreRegistrationFormTrackSelector from '@/components/PreRegistrationFormTrackSelector';
import { usePreRegistration } from '@/hooks/usePreRegistration';

const PreRegistrationForm = () => {
  const { formState, handleChange, handleTrackSelect, handleSubmit } = usePreRegistration();

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
    <PreRegistrationFormContainer onSubmit={handleSubmit}>
      <PreRegistrationFormFields 
        formState={formState}
        onChange={handleChange}
      />

      <PreRegistrationFormTrackSelector
        value={formState.track}
        onSelect={handleTrackSelect}
        tracks={tracks}
      />

      <PreRegistrationFormSubmitButton isSubmitting={formState.isSubmitting} />
    </PreRegistrationFormContainer>
  );
};

export default PreRegistrationForm;
