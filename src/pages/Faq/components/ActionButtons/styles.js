import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

const button = (theme) => ({
  textTransform: "none",
  borderRadius: 2,
  color: "white",
  fontWeight: 700,
  whiteSpace: "initial",
  [theme.breakpoints.up(260)]: {
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.up("sm")]: {
    height: 54,
    fontSize: 16,
  },
  [theme.breakpoints.up("md")]: {
    height: 50,
  },
  [theme.breakpoints.up("lg")]: {
    height: 58,
    fontSize: 18,
  },
  [theme.breakpoints.up("xl")]: {
    height: 66,
    fontSize: 22,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 0,
        marginBottom: 10,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
          marginBottom: 20,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 20,
          marginBottom: 40,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 40,
          marginBottom: 50,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 60,
          marginBottom: 80,
        },
      },
      secondaryButton: {
        ...button(theme),
        backgroundColor: "#929292",
      },
      primaryButton: {
        ...button(theme),
        backgroundColor: theme.palette.primary.main,
      },
    }),
  { index: 1 }
);
