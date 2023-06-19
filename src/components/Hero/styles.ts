import styled, { css } from 'styled-components';

export const Hero = styled.img`
  ${({ theme }) => css`
    max-height: 100vh;
    width: auto;

    &.mobile {
      display: none;
    }

    @media ${theme.media.monitor} {
      height: 100vh;
      object-fit: cover;
    }

    @media ${theme.media.ipad} {
      width: 100%;
      height: 60vw;
      object-fit: cover;
      object-position: top;

      position: absolute;
      top: 120px;

      &.mobile {
        display: block;
      }

      &.desktop {
        display: none;
      }
    }

    @media ${theme.media.mobile} {
      width: 100%;
      height: 70vw;
      object-fit: cover;
      object-position: right;

      position: absolute;
      top: 85px;

      &.mobile {
        display: block;
      }

      &.desktop {
        display: none;
      }
    }
  `}
`;
