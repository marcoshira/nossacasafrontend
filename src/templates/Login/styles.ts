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
      margin: 7rem 0;
      text-align: center;
      font-weight: 700;
      font-size: 4rem;
    }

    .error {
      font-size: 2rem;
      margin-top: 2rem;
    }

    .footer {
      position: absolute;
      bottom: 6rem;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      text-align: center;
      font-size: 2.1rem;

      a {
        margin-left: 1rem;
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
