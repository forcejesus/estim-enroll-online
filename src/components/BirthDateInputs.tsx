
import React from 'react';
import { Calendar } from 'lucide-react';

interface BirthDateInputsProps {
  day: string;
  month: string;
  year: string;
  onChange: (field: 'birthDay' | 'birthMonth' | 'birthYear', value: string) => void;
}

const BirthDateInputs = ({ day, month, year, onChange }: BirthDateInputsProps) => {
  const months = [
    { value: '01', label: 'Janvier' },
    { value: '02', label: 'Février' },
    { value: '03', label: 'Mars' },
    { value: '04', label: 'Avril' },
    { value: '05', label: 'Mai' },
    { value: '06', label: 'Juin' },
    { value: '07', label: 'Juillet' },
    { value: '08', label: 'Août' },
    { value: '09', label: 'Septembre' },
    { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' },
    { value: '12', label: 'Décembre' }
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">Date de naissance</label>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-1">
          <label className="block text-xs text-gray-500 font-medium">Jour</label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="31"
              placeholder="01"
              value={day}
              onChange={(e) => onChange('birthDay', e.target.value)}
              className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-sm text-center"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="block text-xs text-gray-500 font-medium">Mois</label>
          <div className="relative">
            <select
              value={month}
              onChange={(e) => onChange('birthMonth', e.target.value)}
              className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-sm appearance-none bg-white text-center"
            >
              <option value="">--</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="block text-xs text-gray-500 font-medium">Année</label>
          <div className="relative">
            <input
              type="number"
              min="1950"
              max="2010"
              placeholder="1990"
              value={year}
              onChange={(e) => onChange('birthYear', e.target.value)}
              className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-sm text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDateInputs;
