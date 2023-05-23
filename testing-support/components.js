import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/design-system/theme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const AllTProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>{children} </Router>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTProviders, ...options });

export { customRender as render };
