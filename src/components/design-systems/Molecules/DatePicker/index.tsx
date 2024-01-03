// src/components/DropdownDatePicker.tsx
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from '../../Atoms/Icons';
import Typography from '../../Atoms/Typography';
import Button from '../../Atoms/Button';
import { DATEPICKER } from './utils';
import { ExploreBlock } from '../DropDown/interface';

interface DropdownDatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
  className?: string
}

const DropdownDatePicker: React.FC<DropdownDatePickerProps> = ({ selectedDate, onChange, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<ExploreBlock>(DATEPICKER[0])

  const handleChange = (selectedValue: ExploreBlock) => {
    setValue(selectedValue)
    setIsOpen(false)
  }
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (value?.name == DATEPICKER[2]?.name && inputRef.current) {
      console.log(document.getElementById("date")?.click())
      inputRef.current.focus();
    }
  }, [value]);
  return (
    <div className='relative flex '>
      <div className=' items-end justify-end absolute z-[999] block h-fit w-auto '>
        <div className={`flex items-center ${className}`} onClick={() => setIsOpen((pre) => !pre)}>
          <Button className={`w-[182px] justify-center gap-8 flex font-medium text-base text-white font-roboto ${isOpen ? '!rounded-t-md' : 'rounded'}`}> {value?.name} <ArrowDownIcon className='inline-block mt-2' /></Button>
        </div>
        <div className={`${isOpen ? 'h-fit opacity-100' : 'h-0 hidden opacity-0'}`}>
          <ul className="m-0 h-full w-full list-none p-0 ">
            {DATEPICKER?.map((drop, i) =>
              <li
                className={` bg-[#356646] flex w-full cursor-pointer flex-row justify-center px-0 pt-0 text-center transition-all duration-200 ease-in 
                }`}
                key={i}
                onClick={() => handleChange(drop)}
              >
                {drop?.name}
              </li>
            )}

          </ul>
        </div>
        {value?.name == DATEPICKER[2]?.name
        // need to work
        && <input
          type="date"
          id="date"
          ref={inputRef}
          value={selectedDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          className="border rounded p-2 pl-8 bg-[#356646]" // Add appearance-none to hide native styles
        />}

      </div>
    </div>

  );
};

export default DropdownDatePicker;
