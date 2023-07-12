import Image from 'next/image';
import * as Styled from './styles';
import { InputHTMLAttributes, useRef, useState } from 'react';

export type InputProps = {
  placeholder?: string;
  type?: string;
  OnChange?: (value: string) => void;
  child?: React.ReactElement;
  value?: string;
  reference?: HTMLInputElement | null;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  OnChange,
  placeholder,
  type,
  child,
  value = '',
  reference = null,
}: InputProps) => {
  const inputRef = useRef(reference);

  const handleChange = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      /* istanbul ignore else */
      if (OnChange) {
        OnChange(value);
      }
    }
  };

  return (
    <Styled.Input>
      {child}
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        ref={inputRef}
        value={value}
      />
    </Styled.Input>
  );
};
