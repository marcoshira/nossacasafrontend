import Image from 'next/image';
import * as Styled from './styles';
import { useState } from 'react';

export const Input = () => {
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
      <input
        placeholder="Email Address"
        type="email"
        onChange={(v) => setInputValue(v.target.value)}
        value={inputValue}
      />
      <Styled.Button type="submit" onClick={() => emailValidator(inputValue)}>
        <Image
          src="./images/icon-arrow.svg"
          alt="arrow"
          width={17}
          height={17}
        />
      </Styled.Button>
    </Styled.Input>
  );
};
