import styled, { css } from 'styled-components';
import { Header } from '../../components/Header/styles';
import { ButtonWrapper } from '../../components/Button/styles';

export const DashBoardWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    ${Header} {
      margin-bottom: 30px;
    }
  `}
`;

export const DashBoarContentdWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 5%;

    .profile {
      position: relative;
      height: 160px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      img {
        border-radius: 50%;
        transition: ${theme.transitions.fast};
      }

      svg {
        height: 45px;
        color: ${theme.colors.mediumGray};
        position: absolute;
        top: 5px;
        right: 90px;
        border-radius: 50%;
        border: 1px solid gray;
        padding: 5px;
        background: ${theme.colors.white};
      }
    }

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
