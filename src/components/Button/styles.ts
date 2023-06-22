import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.autumn};
    color: white;
    height: 75px;
    border: none;
    font-family: ${theme.font.family.default};
    font-size: 26px;
    font-weight: 400;
    transition: ${theme.transitions.faster};
    letter-spacing: 4px;
    margin-top: 40px;

    svg {
      height: 40px;
    }

    &:hover {
      font-size: 32px;
    }
  `}
`;
