import { Home } from '@/sharedTypes';
import * as Styled from './styles';

export type HomeCardProps = {
  title: string;
} & Styled.HouseType;
export const HomeCard = ({ title, type = 'owned' }: HomeCardProps) => {
  return (
    <Styled.HomeCardWrapper type={type}>
      <h2>{title}</h2>
    </Styled.HomeCardWrapper>
  );
};
