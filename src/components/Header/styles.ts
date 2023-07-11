import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: bottom;
    justify-content: center;
    width: 100%;
    height: 9.5rem;
    padding: 1rem 2rem;

    h2 {
      z-index: 2;
      font-weight: 300;
      font-size: 3.8rem;
      position: absolute;
      top: 3rem;
      right: 2.5rem;
    }

    img {
      height: 9rem;
      width: 14.5rem;
      position: absolute;
      top: 0rem;
      left: 6rem;
    }
  `}
`;
