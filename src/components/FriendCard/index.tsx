import { Crown } from '@styled-icons/fa-solid/Crown';

import Image from 'next/image';

import { User } from '@/sharedTypes';
import { firstName } from '@/utils/truename';

import * as Styled from './styles';

export type FriendCardProps = {
  friend: User;
  owner?: boolean;
};
export const FriendCard = ({ friend, owner }: FriendCardProps) => {
  return (
    <Styled.FriendCardWrapper>
      <Image
        src="/./icons/icon-laptop.png"
        alt="icon"
        width={110}
        height={110}
      />

      <Styled.FriendNameWrapper>
        <p>{firstName(friend.name)}</p>
        {owner && <Crown />}
      </Styled.FriendNameWrapper>
    </Styled.FriendCardWrapper>
  );
};
