import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    ${({ theme }) => css`
      background: ${theme.colors.black};
      color: ${theme.colors.white};
    `}
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;