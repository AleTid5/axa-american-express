import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        display: "none",
        justifyContent: "flex-end",
        padding: 0,
        [theme.breakpoints.up("sm")]: {
          display: "flex",
          padding: "0px 16px",
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 850,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 1100,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 1560,
        },
      },
      chatContainer: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        borderRadius: "10px 10px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        [theme.breakpoints.up("sm")]: {
          maxWidth: 230,
          height: 40,
          padding: 8,
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 270,
          padding: 8,
        },
        [theme.breakpoints.up("lg")]: {
          height: 45,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 350,
          height: 60,
          padding: 10,
        },
      },
      chatIconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      chatIcon: {
        width: 20,
        [theme.breakpoints.up("sm")]: {
          width: 18,
        },
        [theme.breakpoints.up("md")]: {
          width: 22,
        },
        [theme.breakpoints.up("lg")]: {
          width: 26,
        },
        [theme.breakpoints.up("xl")]: {
          width: 34,
        },
      },
      chatTextContainer: {
        display: "flex",
        alignItems: "center",
      },
      chatText: {
        fontSize: 14,
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      closeIconContainer: {
        display: "flex",
        alignItems: "center",
      },
      closeIcon: {
        fontSize: 20,
        [theme.breakpoints.up("sm")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 35,
        },
      },
    }),
  { index: 1 }
);
