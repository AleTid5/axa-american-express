import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../../assets/styles";

export default makeStyles(
  (theme) =>
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
          padding: 40,
        },
        [theme.breakpoints.up("xl")]: {
          padding: 48,
        },
      },
      title: {
        fontSize: 12,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
        },
      },
      subtitle: {
        fontSize: 12,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 10,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
        },
      },
      actionsContainer: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
        marginTop: 10,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 30,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 60,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 90,
        },
      },
      actionLink: {
        ...styles.boldText,
        textDecoration: "underline",
        fontSize: 12,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
        },
      },
      button: {
        textTransform: "none",
        fontSize: 10,
        marginTop: 15,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
          fontSize: 14,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 40,
          fontSize: 16,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 60,
          fontSize: 18,
        },
      },
    }),
  { index: 1 }
);
