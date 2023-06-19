import styled, { css } from 'styled-components';

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    @media ${theme.media.mobile} {
      flex-direction: column;
    }
  `}
`;
