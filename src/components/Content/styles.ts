import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 70%;
    padding: 60px 270px 80px 200px;

    h1 {
      margin: 0;
      margin-bottom: 5px;
    }

    @media ${theme.media.monitor} {
      padding: 60px 350px 80px 200px;
    }

    @media ${theme.media.ipad} {
      width: 100%;
      padding: 0;
    }

    @media ${theme.media.mobile} {
      width: 100%;
      padding: 0;
    }
  `}
`;

export const Title1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: 70px;
    font-weight: 300;
    letter-spacing: 18px;

    @media ${theme.media.monitor} {
      font-size: 100px;
    }

    @media ${theme.media.ipad} {
      font-size: 60px;
      text-align: center;
    }

    @media ${theme.media.mobile} {
      font-size: 40px;
      text-align: center;
    }
  `}
`;

export const Title2 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral};
    font-size: 70px;
    font-weight: 600;
    letter-spacing: 17px;

    @media ${theme.media.monitor} {
      font-size: 100px;
    }

    @media ${theme.media.ipad} {
      font-size: 60px;
      text-align: center;
    }

    @media ${theme.media.mobile} {
      font-size: 40px;
      text-align: center;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: 19px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 30px;

    @media ${theme.media.monitor} {
      font-size: 24px;
      margin-bottom: 60px;
    }

    @media ${theme.media.ipad} {
      text-align: center;
      padding: 0 90px;
      font-size: 24px;
      margin-bottom: 30px;
    }

    @media ${theme.media.mobile} {
      text-align: center;
      padding: 0 28px;
      font-size: 15px;
      margin-bottom: 30px;
    }
  `}
`;
