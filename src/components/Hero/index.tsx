import * as Styled from './styles';

export const Hero = () => {
  return (
    <>
      <Styled.Hero src="./images/hero-desktop.jpg" className="desktop" />
      <Styled.Hero src="./images/hero-mobile.jpg" className="mobile" />
    </>
  );
};
