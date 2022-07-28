import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;     
}

h1,h2,h3,h4,h5,p,a,span{
      font-family: 'Roboto', sans-serif;
} 

`;
