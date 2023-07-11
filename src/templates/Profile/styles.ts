import styled, { css } from 'styled-components';
import { Header } from '../../components/Header/styles';

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      z-index: 2;
      position: absolute;
      top: 2rem;
      left: 2rem;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 0.5rem;

      svg {
        height: 4rem;
        color: white;
      }
    }

    ${Header} {
      margin-bottom: 2rem;
    }
  `}
`;

export const ProfileContentWrapper = styled.div`
  ${({ theme }) => css``}
`;
