import styled, { css } from 'styled-components';

export const RegisterWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      position: absolute;
      top: 30px;
      left: 15px;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 5px;

      svg {
        height: 30px;
        color: white;
      }
    }
  `}
`;

export const RegisterContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 5% 5%;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 700;
      font-size: 40px;
    }
    .error {
      font-size: 20px;
      margin-top: 20px;
    }
  `}
`;
