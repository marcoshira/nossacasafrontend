import { Home as HomeType } from '@/sharedTypes';
import { Login } from '../Login';
import * as Styled from './styles';
import { Header } from '@/components/Header';
import { Menu, MenuLink } from '@/components/Menu';
import { PersonAdd } from '@styled-icons/fluentui-system-regular/PersonAdd';
import { FriendCard } from '@/components/FriendCard';

type HomeProps = {
  onSignOut?: () => void;
} & HomeType;

export const Home = ({
  id,
  name,
  guests,
  lists,
  notes,
  onSignOut,
  owners,
  recipes,
}: HomeProps) => {
  const menuLinks = [
    { title: 'Editar Perfil', href: '/profile' },
    { title: 'Seus Amigos', href: '/friends' },
    { title: 'Suas Casas', href: '/dashboard' },
    { title: 'Logout', onClick: onSignOut },
  ] as MenuLink[];
  return (
    <Styled.Home>
      <Styled.HomeTitleContainer>
        <h1>{name}</h1>
      </Styled.HomeTitleContainer>
      <Menu links={menuLinks} />
      <Styled.HomeContainer>
        <h3 className="subtitle first">Moradores:</h3>
        <Styled.ResidentsWrapper>
          <div className="AddResident">
            <PersonAdd />
            <p className="userName">Adicionar morador</p>
          </div>
          {owners &&
            owners.map((buddy) => {
              return <FriendCard friend={buddy} owner={true} />;
            })}
        </Styled.ResidentsWrapper>
      </Styled.HomeContainer>
    </Styled.Home>
  );
};
