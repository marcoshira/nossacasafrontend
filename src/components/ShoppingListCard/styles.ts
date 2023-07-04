import styled, { css } from 'styled-components';

export const ShoppingListWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 25px;
    padding: 20px 0;
    border-top: 1px solid white;

    a {
      text-decoration: none;
    }
    h3 {
      font-size: 28px;
      color: white;
      margin: 0 0 15px;
    }

    p {
      font-size: 20px;
      color: ${theme.colors.lightgray};
    }
  `}
`;
