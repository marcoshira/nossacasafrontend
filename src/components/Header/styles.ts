import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 100px;

    @media ${theme.media.monitor} {
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
    }

    @media ${theme.media.mobile} {
      margin-bottom: 370px;
      padding-top: 32px;
      padding-left: 32px;

      img {
        height: 24px;
        width: 120px;
      }
    }
  `}
`;
