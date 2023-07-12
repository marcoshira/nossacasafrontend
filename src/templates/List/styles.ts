import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      z-index: 2;
      position: absolute;
      top: 2rem;
      left: 1.5rem;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 0.5rem;

      svg {
        height: 4rem;
        color: white;
      }
    }
  `}
`;

const showList = () => css`
  visibility: visible;
  transform: translateY(00%);
`;

type ShowList = {
  show?: boolean;
};

export const ListContainer = styled.div<ShowList>`
  ${({ theme, show }) => css`
    padding: 5%;

    @keyframes showH2Main {
      0% {
        opacity: 0;
        transform: translateX(10rem);
      }

      100% {
        opacity: 1;
        transform: translateX(0rem);
      }
    }

    @keyframes showH2Discard {
      0% {
        opacity: 0;
        transform: translateX(0rem);
      }

      100% {
        opacity: 1;
        transform: translateX(20rem);
      }
    }

    @keyframes showSVGDiscard {
      0% {
        opacity: 0;
        transform: translateX(0rem);
      }

      100% {
        opacity: 1;
        transform: translateX(-31rem);
      }
    }

    @keyframes showSVGMain {
      0% {
        opacity: 0;
        transform: translateX(-31rem);
      }

      100% {
        opacity: 1;
        transform: translateX(0rem);
      }
    }

    .titleContainer {
      ${show && showList()}

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &.hide {
          opacity: 0;
          visibility: hidden;
          display: none;
        }

        &.show {
          h2 {
            &.discard {
              animation-name: showH2Discard;
              animation-duration: 600ms; /* Duration of the animation */
              animation-timing-function: ease; /* Easing function */
              animation-fill-mode: forwards;
            }

            &.main {
              animation-name: showH2Main;
              animation-duration: 600ms; /* Duration of the animation */
              animation-timing-function: ease; /* Easing function */
              animation-fill-mode: forwards;
            }
          }

          svg {
            &.discard {
              height: 3.8rem;
              animation-name: showSVGDiscard;
              animation-duration: 600ms; /* Duration of the animation */
              animation-timing-function: ease; /* Easing function */
              animation-fill-mode: forwards;
            }
            &.main {
              animation-name: showSVGMain;
              animation-duration: 600ms; /* Duration of the animation */
              animation-timing-function: ease; /* Easing function */
              animation-fill-mode: forwards;
            }
          }
        }
      }

      h2 {
        font-size: 3.2rem;
        margin-top: 0.5rem;
        margin-bottom: 2.2rem;
        margin-right: 0.5rem;

        color: ${theme.colors.autumn};
        transition: ${theme.transitions.slow};
      }

      svg {
        height: 3.3rem;
        margin-bottom: 2.2rem;
        color: ${theme.colors.autumn};
        transition: ${theme.transitions.slow};
      }
    }

    .list {
      background: ${theme.colors.darkautumn};
      border-radius: 1.5rem;
      padding: 1rem 1.5rem;
    }
  `}
`;
