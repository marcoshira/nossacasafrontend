import { ArrowBack } from '@styled-icons/material-outlined/ArrowBack';

import Link from 'next/link';

import { AllUser } from '@/sharedTypes';

import { Header } from '@/components/Header';
import { FriendCard } from '@/components/FriendCard';

import * as Styled from './styles';

export type ProfileProps = {
  data: AllUser;
};
export const Profile = ({ data }: ProfileProps) => {
  return (
    <Styled.ProfileWrapper>
      <div className="arrowBack">
        <Link href="/dashboard">
          <ArrowBack />
        </Link>
      </div>
      <Header />
      <Styled.ProfileContentWrapper></Styled.ProfileContentWrapper>
    </Styled.ProfileWrapper>
  );
};
