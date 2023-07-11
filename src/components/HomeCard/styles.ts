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

    height: 12rem;
    width: 100%;
    border-radius: 1rem;
    position: relative;

    margin-bottom: 1rem;

    h2 {
      position: absolute;
      left: 1.5rem;
      bottom: 1.5rem;
      font-weight: 200;
      font-size: 3.6rem;
      color: white;
    }

    svg {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      height: 4.5rem;
      color: white;
    }
  `}
`;
