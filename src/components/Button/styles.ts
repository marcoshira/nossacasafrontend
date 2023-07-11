import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.autumn};
    color: white;
    height: 7.5rem;
    border: none;
    font-family: ${theme.font.family.default};
    font-size: 2.6rem;
    font-weight: 400;
    transition: ${theme.transitions.faster};
    letter-spacing: 0.4rem;
    margin-top: 4rem;

    svg {
      height: 4rem;
    }

    &:hover {
      font-size: 3.2rem;
    }
  `}
`;
