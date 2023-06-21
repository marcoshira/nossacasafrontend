import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  ${({ theme }) => css``}
`;

export const LoginContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 5%;

    h1 {
      margin-bottom: 70px;
      text-align: center;
      font-weight: 700;
      font-size: 40px;
    }

    .footer {
      position: absolute;
      bottom: 60px;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      text-align: center;
      font-size: 21px;

      a {
        margin-left: 10px;
        color: ${theme.colors.autumn};
        transition: ${theme.transitions.faster};

        &:hover {
          transform: scale(1.1);
          color: ${theme.colors.darkautumn};
        }
      }
    }
  `}
`;
