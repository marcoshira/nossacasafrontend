import styled, { css } from 'styled-components';
import {
  Button,
  MenuContainer,
  MenuWrapper,
} from '../../components/Menu/styles';

export const Home = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    ${MenuContainer} {
      background: ${theme.colors.autumn};
      .Link {
        color: ${theme.colors.white};
      }
    }

    .Button {
      top: 13px;
      left: 18px;
    }

    /* .Open {
      color: ${theme.colors.autumn};
    } */

    .Close {
      color: ${theme.colors.white};
    }
  `}
`;

export const HomeTitleContainer = styled.div`
  ${({ theme }) => css`
    z-index: 4;
    background: ${theme.colors.autumn};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    h1 {
      margin-left: 35px;
      text-align: center;
      font-weight: 300;
      font-size: 38px;
      color: ${theme.colors.white};
    }
  `}
`;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
    h3 {
      font-size: 26px;
      font-weight: 400;
      margin-left: 5%;
      margin-bottom: 15px;
      color: ${theme.colors.autumn};
    }
  `}
`;

export const ResidentsWrapper = styled.div`
  ${({ theme }) => css`
    z-index: 3;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 10px 20px 5px;
    margin: 0 0 15px;
    color: ${theme.colors.black};

    .AddResident {
      white-space: wrap;
      svg {
        height: 110px;
        padding: 15px;
        border-radius: 50%;
        margin-right: 10px;
        background: ${theme.colors.gray};
        color: ${theme.colors.darkgrey};
      }

      p {
        margin-top: 7px;
        text-align: center;
        font-size: 20px;
        margin-right: 10px;
        width: 120px;
        margin-bottom: 0;
        color: ${theme.colors.black};
      }
    }

    /* width */
    ::-webkit-scrollbar {
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
      background-clip: content-box;
      margin: 0 20px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.darkgrey};
      border: 5px solid ${theme.colors.darkgrey};
      border-radius: 15px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}
`;
