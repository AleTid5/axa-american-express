import { createMuiTheme } from "@material-ui/core/styles";
import {
  BentonSansBold,
  BentonSansBook,
  BentonSansLight,
  BentonSansMedium,
} from "../fonts";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#007ad5",
    },
    secondary: {
      main: "#e9e9e9",
    },
  },
  typography: {
    fontFamily:
      "BentonSans, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          BentonSansMedium,
          BentonSansBold,
          BentonSansBook,
          BentonSansLight,
        ],
      },
    },
    MuiButton: {
      contained: {
        boxShadow: "none",
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});
