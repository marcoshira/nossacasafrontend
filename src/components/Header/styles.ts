import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 100px;
    background: ${theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: bottom;
    justify-content: left;
    width: 100%;
    padding: 16px 20px;

    h2 {
      margin-left: 3%;
      margin-top: 5%;
      font-weight: 300;
      font-size: 38px;
    }

    img {
      height: 55px;
      width: 55px;
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
