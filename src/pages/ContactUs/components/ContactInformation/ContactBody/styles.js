import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 20,
        marginBottom: 40,
        [theme.breakpoints.up("xs")]: {
          marginTop: 40,
          marginBottom: 60,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 60,
          marginBottom: 60,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 80,
          marginBottom: 60,
        },
      },
      contactContainer: {
        [theme.breakpoints.up("md")]: {
          padding: "0 40px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0 60px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0 40px",
        },
      },
      title: {
        textAlign: "center",
        fontWeight: 800,
        lineHeight: 1.2,
        fontSize: 12,
        "& > sup": {
          fontSize: 8,
          position: "relative",
          top: 2,
        },
        [theme.breakpoints.up("xs")]: {
          fontSize: 16,
          "& > sup": {
            fontSize: 12,
          },
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 22,
          "& > sup": {
            fontSize: 14,
          },
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 30,
          "& > sup": {
            fontSize: 20,
          },
        },
      },
      number: {
        textAlign: "center",
        color: theme.palette.primary.main,
        fontWeight: 800,
        lineHeight: 1.2,
        fontSize: 20,
        [theme.breakpoints.up("xs")]: {
          fontSize: 24,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 26,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 28,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 32,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 42,
        },
      },
      borderCard: {
        borderBottom: "1px solid #c0c0c0",
        borderRight: 0,
        [theme.breakpoints.up("md")]: {
          borderBottom: 0,
          borderRight: "1px solid #c0c0c0",
        },
      },
      paddingCard: {
        padding: "10px 0",
        [theme.breakpoints.up("md")]: {
          padding: 0,
        },
      },
      contactDivider: {
        backgroundColor: "#c0c0c0",
        margin: 0,
        [theme.breakpoints.up("md")]: {
          margin: "40px 0",
        },
        [theme.breakpoints.up("lg")]: {
          margin: "50px 0",
        },
        [theme.breakpoints.up("xl")]: {
          margin: "60px 0",
        },
      },
      captionMarginTop: {
        marginTop: 10,
        [theme.breakpoints.up("sm")]: {
          marginTop: 30,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 60,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 60,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 80,
        },
      },
      caption: {
        lineHeight: 1.1,
        fontSize: 11,
        [theme.breakpoints.up("xs")]: {
          fontSize: 12,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      cardDivider: {
        backgroundColor: "#c0c0c0",
        marginTop: 15,
        marginBottom: 15,
        [theme.breakpoints.up("sm")]: {
          marginTop: 30,
          marginBottom: 30,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 20,
          marginBottom: 30,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 30,
          marginBottom: 40,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 40,
          marginBottom: 50,
        },
      },
      numberMarginTop: {
        marginTop: 10,
        [theme.breakpoints.up("sm")]: {
          marginTop: 16,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 25,
        },
      },
    }),
  { index: 1 }
);
