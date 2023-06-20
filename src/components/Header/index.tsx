import Image from 'next/image';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Image src="/./images/cabin.svg" alt="cabin" width={50} height={50} />
      <h2>Nossa Casa</h2>
    </Styled.Header>
  );
};
