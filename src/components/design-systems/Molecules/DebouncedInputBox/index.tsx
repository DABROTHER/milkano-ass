// src/components/DebouncedInputBox.tsx
import React, { ChangeEvent, useEffect, useState } from 'react';

interface DebouncedInputBoxProps {
  onInputChange: (value: string) => void;
  className?:string
  placeholder?:string
}

const DebouncedInputBox: React.FC<DebouncedInputBoxProps> = ({ onInputChange, className, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      onInputChange(inputValue);
    }, 1000); // Set the debounce delay (in milliseconds)

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue, onInputChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className={` ${className}`}
      placeholder={placeholder}
    />
  );
};

export default DebouncedInputBox;
