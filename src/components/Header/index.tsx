import Image from 'next/image';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Image
        src="./images/logo.svg"
        alt="Base Apparel Logo"
        width={150}
        height={30}
      />
    </Styled.Header>
  );
};
