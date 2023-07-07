import styled, { css } from 'styled-components';
import { Input } from '../Input/styles';

const showList = () => css`
  visibility: visible;
  transform: translateY(00%);
`;

type ShowList = {
  show?: boolean;
};

// const deletedItem = (array: number[]) => {
//   const interpolations = array.map(
//     (num) => css`
//       .itemsEdit:nth-of-type(${num}) {
//         height: 0;
//         visibility: hidden;
//       }
//     `,
//   );

//   return css`
//     ${interpolations}
//   `;
// };

export const ListEditWrapper = styled.div<ShowList>`
  ${({ theme, show }) => css`
    @keyframes reduceHeight {
      0% {
        transform: translateY(360px);
      }

      100% {
        transform: translateY(0px);
      }
    }
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

    label {
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
      transition: ${theme.transitions.fast};
    }
    .slide-up {
      animation-name: reduceHeight;
      animation-duration: 300ms; /* Duration of the animation */
      animation-timing-function: ease; /* Easing function */
      /* Other styles for the div */
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

      label {
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

      .itemAdded {
        margin: 40px 0;
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

    .submit {
      margin: 10px 5%;
      width: 90%;
      padding: 20px;
      background: ${theme.colors.white};
      color: ${theme.colors.autumn};
      border: none;
      border-radius: 15px;
      font-size: 30px;
      font-family: ${theme.font.family.default};
    }
  `}
`;
