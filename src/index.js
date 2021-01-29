import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import theme from "./assets/styles/theme";
import { LanguageProvider } from "./contexts/LanguageContext";
import Pages from "./pages";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LanguageProvider>
      <CssBaseline />
      <StylesProvider injectFirst>
        <Pages />
      </StylesProvider>
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
