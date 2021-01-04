import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      spaceTop: {
        marginTop: 30,
      },
      mainText: {
        lineHeight: 1,
        fontSize: 18,
        "& sup": {
          marginLeft: 3,
          fontSize: 12,
        },
        "& a": {
          textDecoration: "underline",
          color: "#0302ff",
        },
        "& ul": {
          paddingLeft: 24,
        },
        "& li::marker": {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
          "& sup": {
            fontSize: 14,
          },
          "& li::marker": {
            fontSize: 20,
          },
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 26,
          "& sup": {
            marginLeft: 3,
            fontSize: 16,
          },
          "& li::marker": {
            fontSize: 22,
          },
        },
      },
      caption: {
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 18,
        },
      },
      alphabeticalList: {
        listStyleType: "lower-alpha",
        "& li::marker": {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          paddingLeft: "42px !important",
          "& li::marker": {
            fontSize: 20,
          },
        },
        [theme.breakpoints.up("md")]: {
          paddingLeft: "64px !important",
        },
        [theme.breakpoints.up("lg")]: {
          paddingLeft: "72px !important",
        },
        [theme.breakpoints.up("xl")]: {
          paddingLeft: "96px !important",
          "& li::marker": {
            fontSize: 26,
          },
        },
      },
      message: {
        fontWeight: 700,
        color: theme.palette.primary.main,
      },
    }),
  { index: 1 }
);
