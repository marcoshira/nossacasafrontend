import styled, { css } from 'styled-components';

export const Input = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: bottom;
    margin-bottom: 20px;
    background: ${theme.colors.gray};
    padding: 22px 20px;
    width: 100%;

    /* @media ${theme.media.ipad} {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 100px;
    } */

    input {
      background: ${theme.colors.gray};
      border: none;
      font-family: inherit;
      font-size: 18px;
      color: ${theme.colors.black};
      margin: 5px 25px 0;
      font-size: 22px;

      ::placeholder {
        color: ${theme.colors.darkgrey};
        font-family: ${theme.font.family};
        font-weight: 400;
        font-size: inherit;
        letter-spacing: 2px;
        opacity: 0.6;
      }

      &:focus {
        outline: none;
      }

      /* @media ${theme.media.monitor} {
        font-size: 20px;
        padding: 17px 31px;
      }

      @media ${theme.media.ipad} {
        width: 70%;
        padding: 20px 30px;
        font-size: 22px;
      } */
    }

    svg {
      color: ${theme.colors.darkgrey};
      height: 35px;
    }
  `}
`;
