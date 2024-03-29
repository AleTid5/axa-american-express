import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../MainForm/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      container: {
        marginTop: 15,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 15,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 30,
        },
      },
      titleMargin: {
        marginBottom: 15,
        [theme.breakpoints.up("sm")]: {
          marginBottom: 20,
        },
        [theme.breakpoints.up("md")]: {
          marginBottom: 15,
        },
        [theme.breakpoints.up("lg")]: {
          marginBottom: 20,
        },
        [theme.breakpoints.up("xl")]: {
          marginBottom: 30,
        },
      },
      rowContainer: {
        marginTop: 5,
        [theme.breakpoints.up("sm")]: {
          marginTop: 10,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 15,
        },
      },
    }),
  { index: 1 }
);
