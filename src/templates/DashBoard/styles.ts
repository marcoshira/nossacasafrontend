import styled, { css } from 'styled-components';
import { Header } from '../../components/Header/styles';
import { ButtonWrapper } from '../../components/Button/styles';

export const DashBoardWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;

    ${Header} {
      margin-bottom: 30px;
    }

    .profileDiv {
      position: absolute;
      top: 15px;
      left: 15px;
    }

    .profile {
      position: relative;
      height: 90px;
      width: 100%;

      img {
        border-radius: 50%;
      }

      svg {
        height: 30px;
        color: ${theme.colors.mediumGray};
        position: absolute;
        top: -60px;
        left: 40px;
        border-radius: 50%;
        border: 1px solid gray;
        padding: 5px;
        background: ${theme.colors.white};
      }
    }
  `}
`;

export const DashBoardContentWrapper = styled.div`
  ${({ theme }) => css`
    .userName {
      text-align: center;
      font-size: 18px;
      color: ${theme.colors.mediumGray};
      margin-bottom: 20px;
    }

    .subtitle {
      color: ${theme.colors.autumn};
      font-size: 28px;
      margin-bottom: 15px;
      font-weight: 400;
    }

    .first {
      margin-left: 5%;
    }

    .subtitle:nth-of-type(2) {
      margin-top: 40px;
    }

    ${ButtonWrapper} {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      font-weight: 200;
      border-radius: 10px;

      svg {
        margin-left: 10px;
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
    padding: 0 20px 15px;
    margin: 0 0 15px;

    .AddFriend {
      svg {
        height: 110px;
        padding: 15px;
        border-radius: 50%;
        margin-right: 10px;
        background: ${theme.colors.gray};
        color: ${theme.colors.darkgrey};
      }

      p {
        margin-top: 3px;
        text-align: center;
        font-size: 18px;
        width: 100%;
        margin-bottom: 0;
        color: ${theme.colors.black};
      }
    }

    /* width */
    ::-webkit-scrollbar {
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
      background-clip: content-box;
      margin: 0 20px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.darkgrey};
      border: 5px solid ${theme.colors.darkgrey};
      border-radius: 15px;
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
