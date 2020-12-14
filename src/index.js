import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./assets/styles/theme";
import { LanguageProvider } from "./contexts/LanguageContext";
import Pages from "./pages";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <CssBaseline />
        <Pages />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
