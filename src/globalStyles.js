import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const breakPoints = {
  mobile: '575px',
  tablet: '991px',
  desktop: '992px'
}

export const device = {
  mobile: `(max-width: ${breakPoints.mobile})`,
  tablet: `(min-width: ${breakPoints.mobile}) and (max-width: ${breakPoints.tablet})`,
  desktop: `(min-width: ${breakPoints.desktop})`,
}

export default GlobalStyle