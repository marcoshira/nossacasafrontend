import styled, { css } from 'styled-components';

export const Input = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: bottom;
    margin-bottom: 2rem;
    background: ${theme.colors.gray};
    padding: 2.2rem 2rem;
    width: 100%;

    input {
      background: ${theme.colors.gray};
      border: none;
      font-family: inherit;
      font-size: 1.8rem;
      color: ${theme.colors.black};
      margin: 0.5rem 2.5rem 0;
      font-size: 2.2rem;

      ::placeholder {
        color: ${theme.colors.darkgrey};
        font-family: ${theme.font.family};
        font-weight: 400;
        font-size: inherit;
        letter-spacing: 0.2rem;
        opacity: 0.6;
      }

      &:focus {
        outline: none;
      }
    }

    svg {
      color: ${theme.colors.darkgrey};
      height: 35rem;
    }
  `}
`;
