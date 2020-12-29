import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        padding: "20px 0 20px",
        textAlign: "center",
      },
      title: {
        fontWeight: 600,
        fontSize: 18,
        [theme.breakpoints.up("xs")]: {
          fontSize: 24,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 30,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 40,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 56,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 64,
        },
      },
      subtitle: {
        fontWeight: 300,
        fontSize: 15,
        marginTop: -5,
        [theme.breakpoints.up("xs")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
          marginTop: -10,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 26,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 36,
          marginBottom: 0,
          marginTop: -15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 42,
          marginBottom: 10,
          marginTop: -20,
        },
      },
    }),
  { index: 1 }
);
