import styled, { css } from 'styled-components';

export const RecipeCardWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 2.5rem;
    padding: 2rem 0;
    border-top: 0.1rem solid white;

    h3 {
      font-size: 2.8rem;
      color: white;
      margin: 0 0 1.5rem;
    }

    p {
      font-size: 2rem;
      color: ${theme.colors.lightgray};
    }
  `}
`;
