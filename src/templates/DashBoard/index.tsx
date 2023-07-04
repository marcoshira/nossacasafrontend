import { HomeAdd } from '@styled-icons/fluentui-system-regular/HomeAdd';

import { DashboardIndexProps } from '@/pages/dashboard';

import { Header } from '@/components/Header';

import * as Styled from './styles';
import { HomeCard } from '@/components/HomeCard';
import Link from 'next/link';
import { Menu, MenuLink } from '@/components/Menu';

export type DashBoardProps = {
  onSignOut?: () => void;
} & DashboardIndexProps;
export const DashBoard = ({ onSignOut, data }: DashBoardProps) => {
  const menuLinks = [
    { title: 'Editar Perfil', href: '/profile' },
    { title: 'Seus Amigos', href: '/friends' },
    { title: 'Logout', onClick: onSignOut },
  ] as MenuLink[];

  return (
    <Styled.DashBoardWrapper>
      <Header />
      <Menu links={menuLinks} />
      <Styled.DashBoardContentWrapper>
        <Styled.DashBoardHomesWrapper>
          <h2 className="subtitle">Suas Casas:</h2>
          {data.owned.length > 0 &&
            data.owned.map((home, index) => (
              <Link
                href={`/home?id=${home.id}`}
                as={`home/${home.id}`}
                key={index}
              >
                <HomeCard title={home.name} type="owned" />
              </Link>
            ))}
          <Link href="/create/home">
            <HomeCard title={'Criar casa.'} type="guest" child={<HomeAdd />} />
          </Link>

          <h2 className="subtitle">Outras Casas:</h2>
          {data.guest.length > 0 ? (
            data.guest.map((home) => (
              <Link href={`/home/` + home.id}>
                <HomeCard title={home.name} type="owned" />
              </Link>
            ))
          ) : (
            <HomeCard title={'Você não possui nenhuma casa.'} type="guest" />
          )}
        </Styled.DashBoardHomesWrapper>
      </Styled.DashBoardContentWrapper>
    </Styled.DashBoardWrapper>
  );
};
