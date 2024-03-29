import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        backgroundColor: "white",
        display: "flex",
        padding: 12,
        [theme.breakpoints.up("sm")]: {
          padding: 18,
        },
        [theme.breakpoints.up("md")]: {
          padding: 12,
        },
        [theme.breakpoints.up("xl")]: {
          padding: 22,
        },
      },
      icon: {
        maxWidth: 30,
        [theme.breakpoints.up("xs")]: {
          maxWidth: 50,
        },
        [theme.breakpoints.up("sm")]: {
          maxWidth: "100%",
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 50,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 45,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: "100%",
        },
      },
    }),
  { index: 1 }
);
