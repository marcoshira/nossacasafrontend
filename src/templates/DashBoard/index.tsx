import { Logout } from '@styled-icons/material-outlined/Logout';
import { ModeEdit } from '@styled-icons/material-outlined/ModeEdit';
import { HomeAdd } from '@styled-icons/fluentui-system-regular/HomeAdd';

import { DashboardIndexProps } from '@/pages/dashboard';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

import * as Styled from './styles';
import { HomeCard } from '@/components/HomeCard';
import Link from 'next/link';
import Image from 'next/image';

export type DashBoardProps = {
  onSignOut?: () => void;
} & DashboardIndexProps;
export const DashBoard = ({ onSignOut, data }: DashBoardProps) => {
  return (
    <Styled.DashBoardWrapper>
      <Header />
      <Styled.DashBoarContentdWrapper>
        <Link href="/profile" className="profile">
          <ModeEdit />
          <Image
            src="/./icons/icon-laptop.png"
            alt="icon"
            width={150}
            height={150}
          />
        </Link>
        <h2 className="subtitle">Suas Casas:</h2>
        {data.owned.length > 0 &&
          data.owned.map((home) => (
            <Link href={`/home/` + home.id}>
              <HomeCard title={home.name} type="owned" />
            </Link>
          ))}
        <Link href="/create/home">
          <HomeCard title={'Criar casa.'} type="none" child={<HomeAdd />} />
        </Link>

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
