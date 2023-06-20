import Image from 'next/image';
import * as Styled from './styles';
import { useState } from 'react';

export type InputProps = {
  placeholder?: string;
  type?: string;
  OnChange?: (value: string) => void;
  child?: React.ReactElement;
};

export const Input = ({ OnChange, placeholder, type, child }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (val: string) => {
    setInputValue(val);
  };

  const emailValidator = (val: string) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (val.match(validRegex)) {
      alert('Email registered!');
      setInputValue('');
    } else {
      alert('Invalid email address!');
    }
  };

  return (
    <Styled.Input>
      {child}
      <input
        placeholder={placeholder}
        type={type}
        onChange={() => OnChange}
        value={inputValue}
      />
    </Styled.Input>
  );
};
