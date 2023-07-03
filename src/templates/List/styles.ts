import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      z-index: 2;
      position: absolute;
      top: 20px;
      left: 15px;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 5px;

      svg {
        height: 40px;
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
        font-size: 32px;
        margin-top: 10px;
        margin-bottom: 20px;
        margin-right: 5px;
        color: ${theme.colors.autumn};
      }

      svg {
        height: 30px;
        margin-bottom: 20px;
        color: ${theme.colors.autumn};
      }
    }

    .list {
      background: ${theme.colors.darkautumn};
      border-radius: 15px;
      padding: 10px 15px;
    }
  `}
`;
