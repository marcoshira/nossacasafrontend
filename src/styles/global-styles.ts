import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  overflow-x: scroll;
}

h1, h2, h3, h4, h5, h6{
  font-weight: 900;
  margin: 0;
}

p{
  margin: 0;
}

a{
  color: inherit;
  cursor: pointer;
}
`;
