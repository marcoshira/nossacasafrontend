import styled, { css } from 'styled-components';

export const FriendCardWrapper = styled.div`
  ${({ theme }) => css`
    white-space: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 0.1rem solid ${theme.colors.white};

    img {
      border-radius: 50%;
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
      font-size: 2.8rem;
      margin: 0.7rem 0.8rem 0;
    }
    svg {
      height: 2.5rem;
      color: white;
    }
  `}
`;
