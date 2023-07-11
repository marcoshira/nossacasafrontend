import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      z-index: 2;
      position: absolute;
      top: 2rem;
      left: 1.5rem;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 0.5rem;

      svg {
        height: 4rem;
        color: white;
      }
    }
  `}
`;

export const ListContainer = styled.div`
  ${({ theme }) => css`
    padding: 5%;

    .titleContainer {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;

      h2 {
        font-size: 3.2rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-right: 0.5rem;
        color: ${theme.colors.autumn};
      }

      svg {
        height: 3rem;
        margin-bottom: 2rem;
        color: ${theme.colors.autumn};
      }
    }

    .list {
      background: ${theme.colors.darkautumn};
      border-radius: 1.5rem;
      padding: 1rem 1.5rem;
    }
  `}
`;
