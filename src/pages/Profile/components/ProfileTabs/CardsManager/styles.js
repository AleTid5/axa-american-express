import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

const textFontSize = (theme) => ({
  fontSize: 12,
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
    fontSize: 22,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        padding: "30px 0",
      },
      cardContainer: {
        padding: "20px 0",
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
      },
      cardPaddingLeft: {
        [theme.breakpoints.up("md")]: {
          paddingLeft: 30,
          borderLeft: `1px solid ${theme.palette.secondary.main}`,
        },
      },
      image: {
        maxWidth: 70,
        [theme.breakpoints.up("xs")]: {
          maxWidth: 100,
        },
        [theme.breakpoints.up("sm")]: {
          maxWidth: 150,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 190,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 250,
        },
      },
      cardInfoContainer: {
        paddingLeft: 10,
        [theme.breakpoints.up("sm")]: {
          paddingLeft: 0,
        },
        [theme.breakpoints.up("md")]: {
          paddingLeft: 20,
        },
      },
      title: {
        whiteSpace: "nowrap",
        fontWeight: 800,
        lineHeight: 1.2,
        ...textFontSize(theme),
      },
      subtitle: {
        whiteSpace: "nowrap",
        lineHeight: 1.2,
        ...textFontSize(theme),
      },
      cardNumberPadding: {
        paddingTop: 10,
        [theme.breakpoints.up("sm")]: {
          paddingTop: 20,
        },
        [theme.breakpoints.up("md")]: {
          paddingTop: 12,
        },
        [theme.breakpoints.up("lg")]: {
          paddingTop: 20,
        },
        [theme.breakpoints.up("xl")]: {
          paddingTop: 30,
        },
      },
      icon: {
        cursor: "pointer",
        color: theme.palette.primary.main,
        fontSize: 22,
        marginTop: 20,
        [theme.breakpoints.up("xs")]: {
          marginTop: 10,
        },
        [theme.breakpoints.up("sm")]: {
          marginTop: 0,
          fontSize: 40,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 26,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 32,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 50,
        },
      },
    }),
  { index: 1 }
);
