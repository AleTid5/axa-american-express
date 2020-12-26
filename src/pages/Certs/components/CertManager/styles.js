import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    container: {
      padding: "30px 16px",
      [theme.breakpoints.up("md")]: {
        padding: "40px 0 80px 0",
        maxWidth: 850,
      },
      [theme.breakpoints.up("lg")]: {
        padding: "40px 0 120px 0",
        maxWidth: 1100,
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: 1560,
      },
    },
    title: {
      color: theme.palette.primary.dark,
      fontWeight: 500,
      fontSize: 18,
      marginBottom: 30,
      [theme.breakpoints.up("md")]: {
        fontSize: 23,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 28,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 38,
      },
    },
    button: {
      textTransform: "initial",
      fontWeight: 700,
      borderRadius: 2,
      fontSize: 14,
      [theme.breakpoints.up("md")]: {
        padding: "10px 40px 10px 12px",
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        padding: "10px 50px 10px 12px",
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        padding: "15px 70px 15px 20px",
        fontSize: 24,
      },
    },
    cardTitle: {
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
    cardSubtitle: {
      color: theme.palette.primary.dark,
      fontSize: 10.5,
      [theme.breakpoints.up("xl")]: {
        fontSize: 14,
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
    divider: {
      marginTop: 60,
      height: 2,
    },
    cardButton: {
      textTransform: "initial",
      fontWeight: 700,
      borderRadius: 2,
      marginTop: 15,
      fontSize: 11,
      padding: 4,
      [theme.breakpoints.up("xs")]: {
        fontSize: 12,
        padding: "10px 15px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
        padding: "7px 80px 7px 12px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12,
        padding: "7px 70px 7px 12px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "7px 25px 7px 12px",
        fontSize: 13,
      },
      [theme.breakpoints.up("xl")]: {
        padding: "10px 55px 10px 20px",
        fontSize: 18,
      },
    },
  })
);
