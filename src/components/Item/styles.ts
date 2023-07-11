import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    font-size: 2.2rem;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-top: 0.1rem solid gray;

    .itemQtd {
      font-size: 2.4rem;
    }

    &:first-of-type {
      border: none;
    }
  `}
`;
