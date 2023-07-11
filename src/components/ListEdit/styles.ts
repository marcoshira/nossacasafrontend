import styled, { css } from 'styled-components';
import { Input } from '../Input/styles';

const showList = () => css`
  visibility: visible;
  transform: translateY(00%);
`;

type ShowList = {
  show?: boolean;
};

export const ListEditWrapper = styled.div<ShowList>`
  ${({ theme, show }) => css`
    @keyframes slideUp {
      0% {
        transform: translateY(36rem);
      }

      100% {
        transform: translateY(0rem);
      }
    }
    visibility: hidden;
    position: absolute;
    top: 16.5rem;
    transform: translateY(100%);
    z-index: 5;
    padding: 3.5rem 0;
    background: ${theme.colors.darkautumn};
    border-top-right-radius: 3.5rem;
    border-top-left-radius: 3.5rem;
    width: 100%;
    transition: ${theme.transitions.slow};

    &.extraPad {
      padding-bottom: 39.5rem;
    }

    ${show && showList()}

    h3 {
      color: white;
      font-size: 2.6rem;
      margin: 0 3rem 2rem;
    }

    label {
      background: ${theme.colors.autumn};
      padding: 0 2rem;
      height: 8rem;
      align-items: center;

      input {
        background: ${theme.colors.autumn};
        color: ${theme.colors.white};
        margin-left: 1rem;
        font-size: 2.8rem;
      }

      svg {
        color: ${theme.colors.white};
        min-height: 4rem;
        min-width: 4rem;
      }
    }

    .title {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      margin: 0 3rem 2rem;
      h3 {
        color: white;
        font-size: 2.6rem;
        margin: 0;
      }
      svg {
        height: 3.5rem;
        color: white;
        margin-left: 1.5rem;
      }
    }

    .itemsEdit {
      margin-top: 3.5rem;
      transition: ${theme.transitions.fast};
    }
    .slide-up {
      animation-name: slideUp;
      animation-duration: 300ms; /* Duration of the animation */
      animation-timing-function: ease; /* Easing function */
      /* Other styles for the div */
    }
    .items {
      margin: 2rem 2.5rem;
      padding: 2.5rem;
      border-radius: 1.5rem;
      background: ${theme.colors.autumn};

      h4 {
        color: white;
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }

      label {
        background: ${theme.colors.gray};
        border-radius: 1.5rem;
        padding: 1.5rem 2rem;

        input {
          background: ${theme.colors.gray};
          color: ${theme.colors.autumn};
          margin-right: 0rem;
          font-size: 2.6rem;
          width: 100%;
        }
      }
    }

    .addItem {
      width: 100%;
      transition: ${theme.transitions.fast};

      .itemAdded {
        margin: 4rem 0;
      }

      button {
        margin: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        background: ${theme.colors.autumn};
        color: white;
        width: 90%;
        height: 7rem;
        padding-bottom: 2rem;
        border: none;
        border-radius: 1.5rem;

        p {
          font-size: 2.6rem;
          font-family: ${theme.font.family.default};
          margin-right: 2rem;
        }

        svg {
          height: 3.5rem;
          border-radius: 0.5rem;
        }
      }
    }

    .submit {
      margin: 1rem 5%;
      width: 90%;
      padding: 2rem;
      background: ${theme.colors.white};
      color: ${theme.colors.autumn};
      border: none;
      border-radius: 1.5rem;
      font-size: 3rem;
      font-family: ${theme.font.family.default};
    }
  `}
`;
