import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        height: 50,
        [theme.breakpoints.up("lg")]: {
          height: 65,
        },
      },
      iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 70,
        paddingLeft: 2,
        [theme.breakpoints.up("xs")]: {
          paddingLeft: 8,
        },
        [theme.breakpoints.up("sm")]: {
          justifyContent: "left",
          paddingLeft: 12,
        },
      },
      icon: {
        filter: "brightness(0) invert(1)",
        width: 32,
        [theme.breakpoints.up("xs")]: {
          width: 36,
        },
        [theme.breakpoints.up("sm")]: {
          width: 30,
        },
        [theme.breakpoints.up("md")]: {
          width: 40,
        },
        [theme.breakpoints.up("lg")]: {
          width: 50,
        },
      },
      textContainer: {
        paddingLeft: 2,
        [theme.breakpoints.up("xs")]: {
          paddingLeft: 4,
        },
        [theme.breakpoints.up("sm")]: {
          paddingLeft: 8,
        },
        [theme.breakpoints.up("md")]: {
          paddingLeft: 0,
        },
        [theme.breakpoints.up("lg")]: {
          paddingLeft: 12,
        },
      },
      text: {
        color: "white",
        fontWeight: 300,
        fontSize: 14,
        [theme.breakpoints.up("sm")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 30,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 40,
        },
      },
    }),
  { index: 1 }
);
