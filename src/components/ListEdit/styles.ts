import styled, { css } from 'styled-components';
import { Input } from '../Input/styles';

type ShowList = {
  show?: boolean;
};

const showList = () => css`
  visibility: visible;
  height: 80vh;
`;

export const ListEditWrapper = styled.div<ShowList>`
  ${({ theme, show }) => css`
    visibility: hidden;
    height: 0;
    position: absolute;
    bottom: 0;
    z-index: 5;
    padding: 35px 0;
    background: ${theme.colors.darkautumn};
    border-top-right-radius: 35px;
    border-top-left-radius: 35px;
    width: 100%;
    transition: ${theme.transitions.fast};

    ${show && showList()}

    h3 {
      color: white;
      font-size: 26px;
      margin: 0 30px 10px;
    }

    ${Input} {
      background: ${theme.colors.autumn};

      input {
        background: ${theme.colors.autumn};
        color: ${theme.colors.white};
        margin-left: 10px;
        font-size: 24px;
      }
    }
  `}
`;
