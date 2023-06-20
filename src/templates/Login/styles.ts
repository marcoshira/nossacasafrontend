import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  ${({ theme }) => css``}
`;

export const LoginContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10% 5%;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-weight: 600;
    }
  `}
`;
