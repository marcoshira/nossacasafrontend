import Image from 'next/image';
import * as Styled from './styles';

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Styled.Header>
      <Image src="/./images/cabin.svg" alt="cabin" width={50} height={50} />
      <h2>{title ? title : 'Nossa Casa'}</h2>
    </Styled.Header>
  );
};
