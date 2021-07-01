import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const size = {
  mobile: '575px',
  tablet: '991px',
  desktop: '992px'
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default GlobalStyle