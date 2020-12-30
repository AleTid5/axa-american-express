import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        ...styles.mt30,
        textAlign: "center",
        padding: "0 12px",
        [theme.breakpoints.up("md")]: {
          padding: "0 22px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "0 180px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0 280px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0 220px",
        },
      },
      title: {
        fontWeight: 700,
        color: theme.palette.primary.dark,
        marginTop: 40,
        fontSize: "1.7rem",
        [theme.breakpoints.up("xs")]: {
          fontSize: "2.4rem",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "2.6rem",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "2.8rem",
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 50,
          fontSize: "3rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "3.75rem",
        },
      },
      subtitle: {
        fontWeight: 400,
        lineHeight: 1.2,
        marginTop: 20,
        fontSize: 15,
        [theme.breakpoints.up("xs")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 21,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 23,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 30,
        },
      },
    }),
  { index: 1 }
);
