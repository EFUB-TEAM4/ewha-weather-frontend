/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import theme from "styles/theme";
import GlobalFonts from "styles/styleOptions/fonts/fonts";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalFonts />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
