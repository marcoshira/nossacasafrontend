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
      margin: 0 30px 20px;
    }

    ${Input} {
      background: ${theme.colors.autumn};
      padding: 0 20px;
      height: 80px;
      align-items: center;

      input {
        background: ${theme.colors.autumn};
        color: ${theme.colors.white};
        margin-left: 10px;
        font-size: 28px;
      }

      svg {
        color: ${theme.colors.white};
        min-height: 40px;
        min-width: 40px;
      }
    }

    .title {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      margin: 0 30px 20px;
      h3 {
        color: white;
        font-size: 26px;
        margin: 0;
      }
      svg {
        height: 35px;
        color: white;
        margin-left: 15px;
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

    .addItem {
      width: 100%;
      padding: 5%;

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        background: ${theme.colors.autumn};
        color: white;
        width: 100%;
        height: 70px;
        padding-bottom: 20px;
        border: none;
        border-radius: 15px;

        p {
          font-size: 26px;
          font-family: ${theme.font.family.default};
          margin-right: 20px;
        }

        svg {
          height: 35px;
          border-radius: 5px;
        }
      }
    }
  `}
`;
