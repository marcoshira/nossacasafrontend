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
