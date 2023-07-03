import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    font-size: 22px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid gray;

    .itemQtd {
      font-size: 24px;
    }

    &:first-of-type {
      border: none;
    }
  `}
`;
