import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    container: {
      padding: 8,
      [theme.breakpoints.up("sm")]: {
        padding: 10,
      },
      [theme.breakpoints.up("md")]: {
        padding: 32,
      },
      [theme.breakpoints.up("lg")]: {
        padding: 48,
      },
    },
    title: {
      fontSize: 11,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    subtitle: {
      fontSize: 11,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 10,
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    actionsContainer: {
      display: "grid",
      gridTemplateColumns: "40% 60%",
      [theme.breakpoints.up("xl")]: {
        marginTop: 90,
      },
    },
    actionLink: {
      ...styles.boldText,
      textDecoration: "underline",
      fontSize: 11,
      marginTop: 10,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 15,
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    button: {
      fontSize: 10,
      marginTop: 15,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 60,
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
    },
  })
);
