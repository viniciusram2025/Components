/* eslint-disable no-undef */
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 16px = 1.6rem
  }

  body {
    scroll-behavior: smooth;
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.text};
  }

  body, input, textarea, p {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-family: ${({ theme }) => theme.fontFamily.title};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }


  button {
    cursor: pointer;
  }

`;
