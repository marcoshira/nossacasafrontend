import styled, { css } from 'styled-components';

type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  height: 100vh;
`;
export const MenuContainer = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;
    height: 0;
    visibility: hidden;
    ${visible && menuVisible()}
  `}
`;

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      margin-bottom: 40px;
      p {
        text-align: center;
        color: ${theme.colors.autumn};
        font-size: 36px;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: absolute;
    top: 20px;
    left: 25px;
    background: transparent;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    > svg {
      width: 50px;
      height: 50px;
    }

    .Close {
      color: ${theme.colors.autumn};
    }
  `}
`;
