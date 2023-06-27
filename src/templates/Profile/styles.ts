import styled, { css } from 'styled-components';
import { Header } from '../../components/Header/styles';

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    .arrowBack {
      z-index: 2;
      position: absolute;
      top: 20px;
      left: 20px;
      border-radius: 50%;
      background: ${theme.colors.darkautumn};
      padding: 5px;

      svg {
        height: 40px;
        color: white;
      }
    }

    ${Header} {
      margin-bottom: 20px;
    }
  `}
`;

export const ProfileContentWrapper = styled.div`
  ${({ theme }) => css``}
`;
