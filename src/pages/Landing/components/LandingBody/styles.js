import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    containerMaxWidthMd: {
      [theme.breakpoints.up("xl")]: {
        maxWidth: 1140,
      },
    },
    container: {
      ...styles.mt30,
      textAlign: "center",
      paddingBottom: 30,
      [theme.breakpoints.up("sm")]: {
        ...styles.mt50,
        paddingBottom: 50,
      },
      [theme.breakpoints.up("lg")]: {
        ...styles.mt100,
        paddingBottom: 70,
      },
    },
    mobileTypographyH4: {
      fontWeight: 300,
      fontSize: 20,
      padding: "30px 20px",
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      [theme.breakpoints.up("sm")]: {
        padding: "30px 90px",
        fontSize: 26,
      },
    },
    typographyH4: {
      fontWeight: 300,
      fontSize: 20,
      [theme.breakpoints.up("sm")]: {
        fontSize: 26,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 36,
      },
    },
    typographyH5: {
      fontWeight: 300,
      fontSize: 15,
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 28,
      },
    },
    gridItem: {
      marginBottom: 30,
      [theme.breakpoints.up("sm")]: {
        marginBottom: 0,
        padding: 10,
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
        padding: 28,
      },
    },
    typographyST1: {
      lineHeight: 1.3,
      fontWeight: 300,
      fontSize: 13,
      [theme.breakpoints.up("sm")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 21,
      },
    },
    itemTitle: {
      ...styles.mt10,
      [theme.breakpoints.up("sm")]: {
        ...styles.mt30,
      },
    },
    itemSubtitle: {
      ...styles.mt5,
      maxWidth: 300,
      [theme.breakpoints.up("sm")]: {
        ...styles.mt30,
      },
    },
    icon: {
      height: 50,
    },
    button: {
      width: "100%",
      borderRadius: 10,
      [theme.breakpoints.up("sm")]: {
        ...styles.mt30,
        fontSize: 15,
        maxWidth: 150,
      },
      [theme.breakpoints.up("md")]: {
        ...styles.mt50,
        maxWidth: 270,
        height: 70,
        fontSize: 20,
      },
    },
  })
);
