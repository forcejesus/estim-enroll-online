
import React from 'react';
import TrackBottomSheet from '@/components/TrackBottomSheet';

interface PreRegistrationFormTrackSelectorProps {
  value: string;
  onSelect: (track: string) => void;
  tracks: string[];
}

const PreRegistrationFormTrackSelector = ({ value, onSelect, tracks }: PreRegistrationFormTrackSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        Filière souhaitée
      </label>
      <TrackBottomSheet
        value={value}
        onSelect={onSelect}
        tracks={tracks}
        placeholder="Sélectionnez une filière"
      />
    </div>
  );
};

export default PreRegistrationFormTrackSelector;
