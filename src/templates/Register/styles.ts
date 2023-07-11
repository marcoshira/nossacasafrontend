import styled, { css } from 'styled-components';

export const RegisterWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      position: absolute;
      z-index: 2;
      top: 2rem;
      left: 2rem;
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

export const RegisterContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 5% 5%;

    h1 {
      margin: 5rem 0;
      text-align: center;
      font-weight: 700;
      font-size: 4rem;
    }
    .error {
      font-size: 2rem;
      margin-top: 2rem;
    }
  `}
`;
