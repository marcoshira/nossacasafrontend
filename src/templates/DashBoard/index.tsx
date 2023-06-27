import { Logout } from '@styled-icons/material-outlined/Logout';
import { HomeAdd } from '@styled-icons/fluentui-system-regular/HomeAdd';
import { PersonAdd } from '@styled-icons/fluentui-system-regular/PersonAdd';

import { DashboardIndexProps } from '@/pages/dashboard';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

import * as Styled from './styles';
import { HomeCard } from '@/components/HomeCard';
import Link from 'next/link';
import Image from 'next/image';
import { trueName } from '@/utils/truename';
import { FriendCard } from '@/components/FriendCard';
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
      {/* <div className="profileDiv">
        <Link href="/profile" className="profile">
          <ModeEdit />
          <Image
            src="/./icons/icon-laptop.png"
            alt="icon"
            width={65}
            height={65}
          />
        </Link>
      </div> */}
      <Styled.DashBoardContentWrapper>
        {/* <h3 className="subtitle first">Seus Amigos:</h3>
        <Styled.FriendsWrapper>
          <div className="AddFriend">
            <PersonAdd />
            <p className="userName">Add a friend.</p>
          </div>
          {data.user.friends &&
            data.user.friends.map((buddy) => {
              return <FriendCard friend={buddy} />;
            })}
        </Styled.FriendsWrapper> */}
        <Styled.DashBoardHomesWrapper>
          <h2 className="subtitle">Suas Casas:</h2>
          {data.owned.length > 0 &&
            data.owned.map((home) => (
              <Link href={`/home/` + home.id}>
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
          {/* <Button
            onClick={onSignOut}
            children={<Logout />}
            title="LOGOUT"
          ></Button> */}
        </Styled.DashBoardHomesWrapper>
      </Styled.DashBoardContentWrapper>
    </Styled.DashBoardWrapper>
  );
};
