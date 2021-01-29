import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      gridRoot: {
        display: "grid",
        gridTemplateColumns: "0 100% 0",
        position: "relative",
        [theme.breakpoints.up("sm")]: {
          top: -55,
          height: 55,
        },
        [theme.breakpoints.up("md")]: {
          top: -75,
          height: 75,
        },
        [theme.breakpoints.up("lg")]: {
          top: -95,
          height: 95,
        },
        [theme.breakpoints.up("xl")]: {
          top: -115,
          height: 115,
        },
      },
      root: {
        flexGrow: 1,
        gridColumn: 2,
        justifyContent: "center",
      },
      boxShadow: {
        display: "flex",
        boxShadow: "0px 0px 20px 0px #0000004d",
        flexWrap: "wrap",
      },
      boxShadowIE11: {
        display: "table",
        boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 30%)",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "auto",
          marginLeft: "7%",
        },
        [theme.breakpoints.up("md")]: {
          marginLeft: "20%",
        },
        [theme.breakpoints.up("lg")]: {
          marginLeft: "13%",
        },
        [theme.breakpoints.up("xl")]: {
          marginLeft: "34%",
        },
      },
      borderRight: {
        borderRight: "3px solid #bbbbbb",
      },
      borderBottom: {
        borderBottom: "3px solid #bbbbbb",
      },
      boxContainer: {
        margin: -1,
        cursor: "pointer",
      },
      boxContainerIE11: {
        margin: -1,
        cursor: "pointer",
        display: "table-row",
        [theme.breakpoints.up("sm")]: {
          display: "table-cell",
        },
      },
      box: {
        padding: 20,
        textAlign: "center",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
          padding: "20px 15px 0 15px",
          width: 125,
          height: 110,
        },
        [theme.breakpoints.up("md")]: {
          padding: "35px 30px 0 30px",
          width: 180,
          height: 150,
        },
        [theme.breakpoints.up("lg")]: {
          padding: "45px 35px 0 35px",
          width: 220,
          height: 190,
        },
        [theme.breakpoints.up("xl")]: {
          padding: "48px 40px 0 40px",
          width: 280,
          height: 230,
        },
      },
      icon: {
        maxWidth: "100%",
        height: 30,
        [theme.breakpoints.up("sm")]: {
          height: 26,
        },
        [theme.breakpoints.up("md")]: {
          height: 32,
        },
        [theme.breakpoints.up("lg")]: {
          height: 42,
        },
        [theme.breakpoints.up("xl")]: {
          height: 55,
        },
      },
      title: {
        ...styles.mt5,
        fontSize: 14,
        [theme.breakpoints.up("sm")]: {
          ...styles.mt5,
          fontSize: 11,
        },
        [theme.breakpoints.up("md")]: {
          ...styles.mt5,
          fontSize: 14,
        },
        [theme.breakpoints.up("lg")]: {
          ...styles.mt5,
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          ...styles.mt5,
          fontSize: 25,
        },
      },
    }),
  { index: 1 }
);
