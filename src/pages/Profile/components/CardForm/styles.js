import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

const textFontSize = (theme) => ({
  fontSize: 14,
  [theme.breakpoints.up("xs")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 23,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: 28,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 25,
      },
      title: {
        ...textFontSize(theme),
      },
      subtitle: {
        ...textFontSize(theme),
        fontWeight: 700,
        marginTop: 10,
      },
      input: {
        paddingTop: 5,
      },
      inputRoot: {
        borderRadius: 8,
      },
      inputOutlined: {
        backgroundColor: "white",
        padding: "15px 14px",
        [theme.breakpoints.up("sm")]: {
          padding: "25px 14px",
        },
      },
      inputNotchedOutline: {
        border: "3px solid #f0f0f0",
      },
      button: {
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 2,
        textTransform: "initial",
        margin: "30px 0",
        fontWeight: 400,
        fontSize: 12,
        minWidth: 150,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          margin: "40px 0",
          fontSize: 16,
          minWidth: 180,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 20,
          minWidth: 200,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 26,
          minWidth: 240,
        },
      },
    }),
  { index: 1 }
);
