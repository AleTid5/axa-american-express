import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../MainForm/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      container: {
        marginTop: 20,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 40,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 60,
        },
      },
      titleContainer: {
        marginBottom: 5,
        [theme.breakpoints.up("sm")]: {
          marginBottom: 10,
        },
        [theme.breakpoints.up("md")]: {
          marginBottom: 15,
        },
        [theme.breakpoints.up("lg")]: {
          marginBottom: 20,
        },
        [theme.breakpoints.up("xl")]: {
          marginBottom: 25,
        },
      },
      spacing1: {
        marginTop: 5,
        [theme.breakpoints.up("lg")]: {
          marginTop: 10,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 15,
        },
      },
      spacing2: {
        [theme.breakpoints.up("md")]: {
          marginTop: 15,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 25,
        },
      },
      spacing3: {
        marginTop: 15,
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 25,
        },
      },
      radioMarginLeft: {
        marginLeft: 30,
      },
    }),
  { index: 1 }
);
