// src/components/DropdownDatePicker.tsx
import React, { ChangeEvent } from 'react';
import { ArrowDownIcon } from '../../../Atoms/Icons';

interface DropdownDatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
}

const DropdownDatePicker: React.FC<DropdownDatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <div className="flex flex-col relative">
      <label className="mb-2 text-sm font-semibold">Select a Date:</label>
      <div className="relative">
        <input
          type="date"
          value={selectedDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          className="border rounded p-2 pl-8 bg-[#356646] appearance-none" // Add appearance-none to hide native styles
        />
        <div className="absolute inset-y-0 flex items-center pl-2 pointer-events-none">
          <ArrowDownIcon className="justify-end" stroke="white" />
        </div>
      </div>
    </div>
  );
};

export default DropdownDatePicker;
