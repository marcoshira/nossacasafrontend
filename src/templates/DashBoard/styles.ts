import styled, { css } from 'styled-components';
import { Header } from '../../components/Header/styles';
import { ButtonWrapper } from '../../components/Button/styles';

export const DashBoardWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2rem;

    ${Header} {
      margin-bottom: 3rem;
    }

    .profileDiv {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
    }

    .profile {
      position: relative;
      height: 9rem;
      width: 100%;

      img {
        border-radius: 50%;
      }

      svg {
        height: 3rem;
        color: ${theme.colors.mediumGray};
        position: absolute;
        top: -6rem;
        left: 4rem;
        border-radius: 50%;
        border: 0.1rem solid gray;
        padding: 0.5rem;
        background: ${theme.colors.white};
      }
    }
  `}
`;

export const DashBoardContentWrapper = styled.div`
  ${({ theme }) => css`
    .userName {
      text-align: center;
      font-size: 1.8rem;
      color: ${theme.colors.mediumGray};
      margin-bottom: 2rem;
    }

    .subtitle {
      color: ${theme.colors.autumn};
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    .first {
      margin-left: 5%;
    }

    .subtitle:nth-of-type(2) {
      margin-top: 4rem;
    }

    ${ButtonWrapper} {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      font-weight: 200;
      border-radius: 1rem;

      svg {
        margin-left: 1rem;
      }
    }
  `}
`;

export const FriendsWrapper = styled.div`
  ${({ theme }) => css`
    z-index: 3;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 0 2rem 1.5rem;
    margin: 0 0 1.5rem;

    .AddFriend {
      svg {
        height: 11rem;
        padding: 1.5rem;
        border-radius: 50%;
        margin-right: 1rem;
        background: ${theme.colors.gray};
        color: ${theme.colors.darkgrey};
      }

      p {
        margin-top: 0.3rem;
        text-align: center;
        font-size: 1.8rem;
        width: 100%;
        margin-bottom: 0;
        color: ${theme.colors.black};
      }
    }

    /* width */
    ::-webkit-scrollbar {
      height: 1rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
      background-clip: content-box;
      margin: 0 2rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.darkgrey};
      border: 0.5rem solid ${theme.colors.darkgrey};
      border-radius: 1.5rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}
`;

export const DashBoardHomesWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 5%;
  `}
`;
