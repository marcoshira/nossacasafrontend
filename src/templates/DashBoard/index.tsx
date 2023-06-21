import { Button } from '@/components/Button';
import * as Styled from './styles';
import { DashboardIndexProps } from '@/pages/dashboard';

export type DashBoardProps = {
  onSignOut?: () => void;
} & DashboardIndexProps;
export const DashBoard = ({ onSignOut, data }: DashBoardProps) => {
  return (
    <Styled.DashBoardWrapper>
      {data.owned[0] ? (
        <h1>{data.owned[0].name}</h1>
      ) : (
        <h1>Você não possui nenhuma casa.</h1>
      )}
      <Button onClick={onSignOut}>LOGOUT</Button>
    </Styled.DashBoardWrapper>
  );
};
