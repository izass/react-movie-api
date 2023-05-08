import React from "react";

import { GlobalStyle } from "./design-system/globalStyles";
import { Navigator } from "./components/Navigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./design-system/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigator />
    </ThemeProvider>
  );
}

export default App;
