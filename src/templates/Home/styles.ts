import styled, { css } from 'styled-components';

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
    margin-top: 1.5rem;

    img {
      border-radius: 50%;
      margin-bottom: 2rem;
    }

    .homeName {
      font-size: 3.6rem;
      font-weight: 300;
    }
  `}
`;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.autumn};
    border-radius: 1.5rem;
    margin: 3%;
    padding: 2rem 1.5rem 1.5rem;
    color: white;

    .section {
      color: white;
      font-size: 3rem;
      margin-bottom: 1.5rem;
      margin-left: 0.8rem;
    }
  `}
`;

export const RecipesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 1.5rem;
    padding: 1.5rem 0;
    background: ${theme.colors.darkautumn};

    .AddRecipe {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 1.5rem;
      position: relative;

      .svgs {
        position: relative;
        svg {
          height: 8rem;
        }

        .Plus {
          height: 3rem;
          position: absolute;
          top: 0rem;
          left: 6.5rem;
          color: white;
        }
      }

      h2 {
        font-size: 2.8rem;
        color: ${theme.colors.white};
        text-align: center;
        width: 20rem;
      }
    }
  `}
`;

export const ListsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 1.5rem;
    padding: 1.5rem 0;
    background: ${theme.colors.darkautumn};

    .AddList {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 1.5rem;

      .svgs {
        position: relative;
        svg {
          height: 7rem;
        }

        .Plus {
          height: 3rem;
          position: absolute;
          top: -1rem;
          left: 6rem;
          color: white;
        }
      }

      h2 {
        font-size: 2.8rem;
        color: ${theme.colors.white};
        text-align: center;
        width: 18rem;
      }
    }
  `}
`;

export const NotesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 1.5rem;
    padding: 1.5rem 0;
    background: ${theme.colors.darkautumn};

    .AddNote {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 1.5rem;

      .svgs {
        position: relative;
        svg {
          height: 6.5rem;
        }

        .Plus {
          height: 3rem;
          position: absolute;
          top: -1rem;
          left: 6rem;
          color: white;
        }
      }

      h2 {
        font-size: 2.8rem;
        color: ${theme.colors.white};
        text-align: center;
        width: 18rem;
      }
    }
  `}
`;

export const ResidentsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    border-radius: 1.5rem;
    background: ${theme.colors.darkautumn};

    .AddResident {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-right: 4rem;
      margin-bottom: 2rem;
      svg {
        height: 9rem;
        padding: 0.8rem;
        border-radius: 50%;

        /* background: ${theme.colors.white}; */
        color: ${theme.colors.white};
      }

      p {
        margin-top: 0.7rem;
        text-align: center;
        font-size: 2.8rem;
        width: 12rem;
        margin-bottom: 0;
        color: white;
      }
    }
  `}
`;
