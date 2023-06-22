import { Logout } from '@styled-icons/material-outlined/Logout';

import { DashboardIndexProps } from '@/pages/dashboard';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

import * as Styled from './styles';
import { HomeCard } from '@/components/HomeCard';
import Link from 'next/link';

export type DashBoardProps = {
  onSignOut?: () => void;
} & DashboardIndexProps;
export const DashBoard = ({ onSignOut, data }: DashBoardProps) => {
  return (
    <Styled.DashBoardWrapper>
      <Header />
      <Styled.DashBoarContentdWrapper>
        <h2 className="subtitle">Suas Casas:</h2>
        {data.owned.length > 0 ? (
          data.owned.map((home) => (
            <Link href={`/home/` + home.id}>
              <HomeCard title={home.name} type="owned" />
            </Link>
          ))
        ) : (
          <HomeCard title={'Você não possui nenhuma casa.'} type="none" />
        )}

        <h2 className="subtitle">Outras Casas:</h2>
        {data.guest.length > 0 ? (
          data.guest.map((home) => (
            <Link href={`/home/` + home.id}>
              <HomeCard title={home.name} type="guest" />
            </Link>
          ))
        ) : (
          <HomeCard title={'Você não possui nenhuma casa.'} type="none" />
        )}
        <Button
          onClick={onSignOut}
          children={<Logout />}
          title="LOGOUT"
        ></Button>
      </Styled.DashBoarContentdWrapper>
    </Styled.DashBoardWrapper>
  );
};
