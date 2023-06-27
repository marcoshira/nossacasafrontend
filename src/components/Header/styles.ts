import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: bottom;
    justify-content: center;
    width: 100%;
    height: 95px;
    padding: 10px 20px;

    h2 {
      z-index: 2;
      font-weight: 300;
      font-size: 38px;
      position: absolute;
      top: 30px;
      right: 25px;
    }

    img {
      height: 90px;
      width: 145px;
      position: absolute;
      top: 0px;
      left: 60px;
    }

    /* @media ${theme.media.monitor} {
      img {
        height: 35px;
        width: 175px;
      }
    }

    @media ${theme.media.ipad} {
      margin-bottom: 590px;
      padding-top: 40px;
      padding-left: 40px;

      img {
        height: 40px;
        width: 200px;
      }
    } */
  `}
`;
