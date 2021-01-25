import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      title: {
        fontWeight: 700,
        textAlign: "center",
        color: theme.palette.primary.main,
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
      formContainer: {
        marginTop: 10,
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
      },
      findButton: {
        backgroundColor: theme.palette.primary.dark,
        textTransform: "capitalize",
        fontWeight: 700,
        marginTop: 20,
        fontSize: 12,
        width: "100%",
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 18,
          width: "50%",
          marginLeft: "25%",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 15,
          marginTop: 20,
          width: 120,
          marginLeft: 0,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 20,
          marginTop: 25,
          width: 140,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 28,
          marginTop: 30,
          width: 180,
        },
      },
      searchResultTitle: {
        color: theme.palette.primary.main,
        textAlign: "left",
        fontWeight: 900,
        fontSize: 14,
        marginTop: 20,
        [theme.breakpoints.up("md")]: {
          fontSize: 22,
          marginTop: 30,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 24,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 40,
        },
      },
      filesTableContainer: {
        margin: "20px 0",
      },
    }),
  { index: 1 }
);
