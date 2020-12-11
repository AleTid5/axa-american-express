import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Pages from "./pages";
import theme from "./assets/styles/theme";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
