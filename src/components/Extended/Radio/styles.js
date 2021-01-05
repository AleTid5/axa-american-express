import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      radioVerticalRoot: {
        paddingRight: 15,
        [theme.breakpoints.up("sm")]: {
          paddingRight: 25,
        },
        [theme.breakpoints.up("md")]: {
          paddingRight: 20,
        },
        [theme.breakpoints.up("lg")]: {
          paddingRight: 30,
        },
        [theme.breakpoints.up("xl")]: {
          paddingRight: 40,
        },
      },
      radioMarginLeft: {
        marginLeft: 15,
        [theme.breakpoints.up("sm")]: {
          marginLeft: 20,
        },
        [theme.breakpoints.up("lg")]: {
          marginLeft: 40,
        },
        [theme.breakpoints.up("xl")]: {
          marginLeft: 60,
        },
      },
      horizontallyMarginTop: {
        [theme.breakpoints.up("md")]: {
          marginTop: 18,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 25,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 20,
        },
      },
    }),
  { index: 1 }
);
