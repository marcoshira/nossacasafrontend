import styled, { css } from 'styled-components';

export type HouseType = {
  type?: 'owned' | 'guest' | 'none';
};

export const HomeCardWrapper = styled.div<HouseType>`
  ${({ theme, type }) => css`
    ${type === 'owned'
      ? "background-image: url('./images/lake.png')"
      : type === 'none'
      ? "background-image: url('./images/lake-night-.png')"
      : "background-image: url('./images/lake-day.png')"};
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 0%;
    background-position-x: 95%;

    height: 120px;
    width: 100%;
    border-radius: 10px;
    position: relative;

    margin-bottom: 10px;

    h2 {
      position: absolute;
      left: 15px;
      bottom: 15px;
      font-weight: 200;
      font-size: 36px;
      color: white;
    }

    svg {
      position: absolute;
      right: 15px;
      bottom: 15px;
      height: 45px;
      color: white;
    }
  `}
`;
