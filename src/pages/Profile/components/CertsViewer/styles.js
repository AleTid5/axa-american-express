import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 10,
        marginBottom: 50,
        [theme.breakpoints.up("sm")]: {
          marginBottom: 60,
        },
        [theme.breakpoints.up("lg")]: {
          marginBottom: 70,
        },
        [theme.breakpoints.up("xl")]: {
          marginBottom: 100,
        },
      },
      iconCard: {
        border: `2px solid ${theme.palette.primary.dark}`,
      },
      title: {
        color: theme.palette.primary.dark,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: 12,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
        },
      },
      subtitle: {
        color: theme.palette.primary.dark,
        lineHeight: 1.3,
        fontSize: 11,
        [theme.breakpoints.up("xl")]: {
          fontSize: 16,
        },
      },
      iconsContainer: {
        display: "flex",
        alignItems: "center",
      },
      iconContainer: {
        display: "flex",
        justifyContent: "center",
      },
      icon: {
        cursor: "pointer",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        fontWeight: 400,
        [theme.breakpoints.up("xs")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("sm")]: {
          padding: 4,
          fontSize: 35,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 30,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 40,
        },
      },
    }),
  { index: 1 }
);
