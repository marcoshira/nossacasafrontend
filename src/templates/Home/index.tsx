import { PersonAdd } from '@styled-icons/fluentui-system-regular/PersonAdd';
import { Food } from '@styled-icons/fluentui-system-regular/Food';
import { Plus } from '@styled-icons/fa-solid/Plus';

import Image from 'next/image';

import { Home as HomeType } from '@/sharedTypes';

import { Header } from '@/components/Header';
import { Menu, MenuLink } from '@/components/Menu';
import { FriendCard } from '@/components/FriendCard';
import { RecipeCard } from '@/components/RecipeCard';

import * as Styled from './styles';

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
      <Menu links={menuLinks} />
      <Header />
      <Styled.HomeTitleContainer>
        <Image
          src="/./homeicons/homeicon-1.png"
          alt="homeIcon"
          width={200}
          height={200}
        />
        <h2 className="homeName">{name}</h2>
      </Styled.HomeTitleContainer>
      <Styled.HomeContainer>
        <Styled.ContentContainer>
          <p className="section">Receitas :</p>
          <Styled.RecipesWrapper>
            <div className="AddRecipe">
              <Food />
              <Plus className="Plus" />
              <h2>Adicionar receita</h2>
            </div>
            {recipes &&
              recipes.map((recipe, index) => {
                return <RecipeCard data={recipe} key={index} />;
              })}
          </Styled.RecipesWrapper>
        </Styled.ContentContainer>

        <Styled.ContentContainer>
          <p className="section">Moradores ( {owners?.length} ) :</p>
          <Styled.ResidentsWrapper>
            <div className="AddResident">
              <PersonAdd />
              <p className="userName">Adicionar morador</p>
            </div>
            {owners &&
              owners.map((buddy, index) => {
                return <FriendCard friend={buddy} owner={true} key={index} />;
              })}
          </Styled.ResidentsWrapper>
        </Styled.ContentContainer>
      </Styled.HomeContainer>
    </Styled.Home>
  );
};
