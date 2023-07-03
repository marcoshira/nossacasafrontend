import styled, { css } from 'styled-components';
import { Input } from '../Input/styles';

type ShowList = {
  show?: boolean;
};

const showList = () => css`
  visibility: visible;
  transform: translateY(00%);
`;

export const ListEditWrapper = styled.div<ShowList>`
  ${({ theme, show }) => css`
    visibility: hidden;
    position: absolute;
    top: 165px;
    transform: translateY(100%);
    z-index: 5;
    padding: 35px 0;
    background: ${theme.colors.darkautumn};
    border-top-right-radius: 35px;
    border-top-left-radius: 35px;
    width: 100%;
    transition: ${theme.transitions.slow};

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
        font-size: 28px;
      }
    }

    .itemsEdit {
      margin-top: 35px;
    }

    .items {
      margin: 20px 25px;
      padding: 25px;
      border-radius: 15px;
      background: ${theme.colors.autumn};

      h4 {
        color: white;
        font-size: 24px;
        margin-bottom: 10px;
      }

      ${Input} {
        background: ${theme.colors.gray};
        border-radius: 15px;
        padding: 15px 20px;

        input {
          background: ${theme.colors.gray};
          color: ${theme.colors.autumn};
          margin-right: 0px;
          font-size: 26px;
          width: 100%;
        }
      }
    }
  `}
`;
