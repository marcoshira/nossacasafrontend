import { Home } from '@/sharedTypes';
import * as Styled from './styles';

export type HomeCardProps = {
  title: string;
  child?: React.ReactNode;
} & Styled.HouseType;
export const HomeCard = ({ title, type = 'owned', child }: HomeCardProps) => {
  return (
    <Styled.HomeCardWrapper type={type}>
      <h2>{title}</h2>
      {child && child}
    </Styled.HomeCardWrapper>
  );
};
