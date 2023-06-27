import styled, { css } from 'styled-components';

export const FriendCardWrapper = styled.div`
  ${({ theme }) => css`
    white-space: wrap;

    img {
      border-radius: 50%;
      margin: 0 10px;
    }
  `}
`;

export const FriendNameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      font-size: 20px;
      margin: 7px 3px 0;
    }
    svg {
      height: 25px;
      color: gold;
    }
  `}
`;
