import styled, { css } from 'styled-components';
import {
  Button,
  MenuContainer,
  MenuWrapper,
} from '../../components/Menu/styles';

export const Home = styled.div`
  ${({ theme }) => css`
    height: 100vh;
  `}
`;

export const HomeTitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 5%;
    margin-top: 15px;

    img {
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .homeName {
      font-size: 36px;
      font-weight: 300;
    }
  `}
`;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.autumn};
    border-radius: 15px;
    margin: 3%;
    padding: 20px 15px 15px;
    color: white;

    .section {
      color: white;
      font-size: 30px;
      margin-bottom: 15px;
      margin-left: 8px;
    }
  `}
`;

export const RecipesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 15px;
    padding: 15px 0;
    background: ${theme.colors.darkautumn};

    .AddRecipe {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 15px;
      position: relative;

      .svgs {
        position: relative;
        svg {
          height: 80px;
        }

        .Plus {
          height: 30px;
          position: absolute;
          top: 0px;
          left: 65px;
          color: white;
        }
      }

      h2 {
        font-size: 28px;
        color: ${theme.colors.white};
        text-align: center;
        width: 200px;
      }
    }
  `}
`;

export const ListsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 15px;
    padding: 15px 0;
    background: ${theme.colors.darkautumn};

    .AddList {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 15px;

      .svgs {
        position: relative;
        svg {
          height: 70px;
        }

        .Plus {
          height: 30px;
          position: absolute;
          top: -10px;
          left: 60px;
          color: white;
        }
      }

      h2 {
        font-size: 28px;
        color: ${theme.colors.white};
        text-align: center;
        width: 180px;
      }
    }
  `}
`;

export const NotesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 15px;
    padding: 15px 0;
    background: ${theme.colors.darkautumn};

    .AddNote {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 15px;

      .svgs {
        position: relative;
        svg {
          height: 65px;
        }

        .Plus {
          height: 30px;
          position: absolute;
          top: -10px;
          left: 60px;
          color: white;
        }
      }

      h2 {
        font-size: 28px;
        color: ${theme.colors.white};
        text-align: center;
        width: 180px;
      }
    }
  `}
`;

export const ResidentsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 0;
    border-radius: 15px;
    background: ${theme.colors.darkautumn};

    .AddResident {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-right: 40px;
      margin-bottom: 20px;
      svg {
        height: 90px;
        padding: 8px;
        border-radius: 50%;

        /* background: ${theme.colors.white}; */
        color: ${theme.colors.white};
      }

      p {
        margin-top: 7px;
        text-align: center;
        font-size: 28px;
        width: 120px;
        margin-bottom: 0;
        color: white;
      }
    }
  `}
`;
