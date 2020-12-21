import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    appbar: {
      ...styles.whiteBackground,
      padding: "10px",
      height: 75,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        height: 100,
      },
      [theme.breakpoints.up("lg")]: {
        height: 150,
      },
      [theme.breakpoints.up("xl")]: {
        height: 180,
      },
    },
    toolbar: {
      display: "grid",
      gridTemplateColumns: "20% 0 80%",
      [theme.breakpoints.up("xs")]: {
        gridTemplateColumns: "15% 0 85%",
      },
    },
    toolbarWithShortcuts: {
      display: "grid",
      gridTemplateColumns: "20% 0 80%",
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "10% 50% 40%",
      },
      [theme.breakpoints.up(796)]: {
        gridTemplateColumns: "10% 60% 30%",
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "15% 60% 25%",
      },
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "15% 60% 25%",
      },
      [theme.breakpoints.up("xl")]: {
        gridTemplateColumns: "20% 60% 20%",
      },
    },
    menuButton: {
      gridColumn: 1,
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: theme.spacing(0),
      padding: 0,
      [theme.breakpoints.up("lg")]: {
        marginLeft: theme.spacing(2),
      },
    },
    shortcutsContainer: {
      gridColumn: 2,
      justifyContent: "center",
    },
    shortcutTitle: {
      ...styles.textPrimaryDark,
      textAlign: "center",
      display: "none",
      [theme.breakpoints.up(796)]: {
        gridTemplateColumns: "10% 60% 30%",
        display: "inline",
        fontSize: 14,
        maxWidth: 100,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 18,
        maxWidth: 130,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20,
        maxWidth: 140,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 30,
        maxWidth: 210,
      },
    },
    rightContent: {
      gridColumn: 3,
      display: "flex",
      justifyContent: "flex-end",
    },
    logo: {
      height: 30,
      [theme.breakpoints.up("xs")]: {
        height: 35,
      },
      [theme.breakpoints.up("sm")]: {
        height: 50,
      },
      [theme.breakpoints.up("md")]: {
        height: 75,
      },
      [theme.breakpoints.up("lg")]: {
        height: 100,
      },
    },
    horizontalDivider: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(1),
      borderRadius: 10,
      fontSize: 8,
      textAlign: "center",
      [theme.breakpoints.up("xs")]: {
        marginRight: theme.spacing(1),
        fontSize: 10,
        padding: "8px 12px",
      },
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(2),
        width: 140,
        height: 30,
        fontSize: 12,
      },
      [theme.breakpoints.up("md")]: {
        marginRight: theme.spacing(2),
        width: 170,
        height: 40,
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        marginRight: theme.spacing(2),
        width: 220,
        height: 50,
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        marginRight: theme.spacing(2),
        width: 250,
        height: 60,
        fontSize: 18,
      },
    },
    menuList: {
      ...styles.textPrimaryDark,
      padding: 0,
      backgroundColor: "#e9e9e9",
    },
    menuPaper: {
      marginTop: 45,
      [theme.breakpoints.up("md")]: {
        marginTop: 55,
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: 70,
      },
    },
    menuItem: {
      width: 180,
      height: 40,
      [theme.breakpoints.up("sm")]: {
        width: 190,
      },
      [theme.breakpoints.up("md")]: {
        width: 220,
      },
      [theme.breakpoints.up("lg")]: {
        width: 240,
      },
      [theme.breakpoints.up("xl")]: {
        width: 270,
        height: 50,
      },
    },
    menuName: {
      fontSize: 16,
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 22,
      },
    },
    menuRightArrowIcon: {
      fontSize: 18,
      [theme.breakpoints.up("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 22,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 30,
      },
    },
    userIcon: {
      marginTop: 12,
      maxWidth: 20,
      [theme.breakpoints.up("xs")]: {
        maxWidth: 30,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 40,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 50,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 70,
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: 100,
      },
    },
    userName: {
      color: "#007ad5",
      fontWeight: 700,
      lineHeight: 2,
      margin: "10px 0 0 6px",
      fontSize: 12,
      [theme.breakpoints.up("xs")]: {
        margin: "12px 0 0 12px",
        fontSize: 16,
      },
      [theme.breakpoints.up("sm")]: {
        margin: "12px 0 0 12px",
        fontSize: 22,
      },
      [theme.breakpoints.up("md")]: {
        margin: "12px 0 0 12px",
        fontSize: 25,
        lineHeight: 2,
      },
      [theme.breakpoints.up("lg")]: {
        margin: "12px 0 0 12px",
        fontSize: 28,
        lineHeight: 2.3,
      },
      [theme.breakpoints.up("xl")]: {
        margin: "12px 0 0 12px",
        fontSize: 32,
        lineHeight: 2,
      },
    },
    menuIcon: {
      [theme.breakpoints.up(0)]: {
        padding: 3,
      },
      [theme.breakpoints.up("xs")]: {
        padding: 12,
      },
    },
    arrowIcon: {
      marginTop: 6,
      fontSize: 25,
      [theme.breakpoints.up("xs")]: {
        marginTop: 3,
        fontSize: 25,
      },
      [theme.breakpoints.up("sm")]: {
        ...styles.mt5,
        fontSize: 32,
      },
      [theme.breakpoints.up("md")]: {
        ...styles.mt5,
        fontSize: 40,
      },
      [theme.breakpoints.up("lg")]: {
        ...styles.mt5,
        fontSize: 45,
      },
      [theme.breakpoints.up("xl")]: {
        ...styles.mt5,
        fontSize: 50,
      },
    },
  })
);
