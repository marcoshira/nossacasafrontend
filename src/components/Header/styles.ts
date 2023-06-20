import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 100px;
    background: ${theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: bottom;
    justify-content: center;
    width: 100%;
    padding: 16px 0;

    h2 {
      margin-left: 4.5%;
      margin-top: 3.5%;
      font-weight: 300;
      font-size: 38px;
    }

    img {
      height: 50px;
      width: 50px;
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
