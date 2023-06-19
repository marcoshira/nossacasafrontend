import { Header } from '@/components/Header';
import * as Styled from './styles';
import { Content } from '@/components/Content';
import { Hero } from '@/components/Hero';

export type HomeProps = {
  title?: string;
};
export const Home = ({ title }: HomeProps) => {
  return (
    <Styled.Home>
      <Content />
      <Hero />
    </Styled.Home>
  );
};
