import { ButtonHTMLAttributes, FormEvent } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: FormEvent<Element>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  title,
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const handleClick = (event: FormEvent) => {
    /* istanbul ignore else */
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Styled.ButtonWrapper disabled={disabled} onClick={handleClick}>
      {title}
      {children}
    </Styled.ButtonWrapper>
  );
};
