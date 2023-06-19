import styled, { css } from 'styled-components';

export const Input = styled.label`
  ${({ theme }) => css`
    position: relative;

    @media ${theme.media.ipad} {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 100px;
    }

    @media ${theme.media.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 100px;
    }
    input {
      border-radius: 30px;
      border: 1px solid ${theme.colors.primaryColor};
      padding: 18px 35px;
      width: 100%;
      font-family: inherit;
      font-size: 18px;
      color: ${theme.colors.primaryColor};

      ::placeholder {
        color: ${theme.colors.primaryColor};
        font-family: ${theme.font.family};
        font-weight: 300;
        letter-spacing: 2px;
        opacity: 0.6;
      }

      &:focus {
        outline: none;
      }

      @media ${theme.media.monitor} {
        font-size: 20px;
        padding: 17px 31px;
      }

      @media ${theme.media.ipad} {
        width: 70%;
        padding: 20px 30px;
        font-size: 22px;
      }

      @media ${theme.media.mobile} {
        width: 85%;
        padding: 17px 25px;
        font-size: 14px;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: -20px;
    right: 0px;
    background: ${theme.gradients.secondary};
    height: 55px;
    width: 95px;
    border-radius: 30px;
    border: 0px solid ${theme.colors.secondaryColor};
    border-bottom: 1px solid ${theme.colors.secondaryColor};
    opacity: 0.8;
    transition: all 300ms ease;
    box-shadow: 0 20px 15px 0px rgb(249, 225, 225, 1);

    &:hover {
      cursor: pointer;
      opacity: 1;
    }

    @media ${theme.media.ipad} {
      top: 0px;
      right: 124px;
      height: 65px;
      width: 110px;

      img {
        height: 24px;
        width: 16px;
      }
    }

    @media ${theme.media.mobile} {
      top: 0px;
      right: 30px;
      height: 50px;
      width: 65px;

      img {
        height: 21px;
        width: 13px;
      }
    }
  `}
`;
