import styled, { css } from 'styled-components';

export const FriendCardWrapper = styled.div`
  ${({ theme }) => css`
    white-space: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid ${theme.colors.white};

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
      font-size: 28px;
      margin: 7px 8px 0;
    }
    svg {
      height: 25px;
      color: white;
    }
  `}
`;
