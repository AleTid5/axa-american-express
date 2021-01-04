import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      root: {
        width: "100%",
      },
      subtitle: {
        textAlign: "center",
        fontWeight: 400,
        color: theme.palette.primary.main,
        marginTop: 0,
        fontSize: 16,
        [theme.breakpoints.up("xs")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 24,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 26,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 32,
        },
      },
      inputContainer: {
        padding: 0,
        [theme.breakpoints.up("sm")]: {
          padding: "0 40px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "0 210px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0 320px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0 500px",
        },
      },
      icon: {
        color: theme.palette.primary.main,
        position: "relative",
        fontSize: 30,
        [theme.breakpoints.up("sm")]: {
          fontSize: 48,
          right: -15,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 44,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 52,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 60,
        },
      },
    }),
  { index: 1 }
);
