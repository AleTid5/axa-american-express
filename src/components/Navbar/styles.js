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
    menuButton: {
      marginLeft: theme.spacing(0),
      padding: "12px 12px 12px 0",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
        padding: 12,
      },
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
      [theme.breakpoints.up("xl")]: {
        height: 110,
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
        marginRight: theme.spacing(3),
        width: 220,
        height: 50,
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        marginRight: theme.spacing(8),
        width: 270,
        height: 70,
        fontSize: 20,
      },
    },
    menuList: {
      ...styles.textPrimaryDark,
      padding: 0,
      backgroundColor: "#e9e9e9",
    },
    menuPaper: {
      marginTop: 0,
    },
    userIcon: {
      marginTop: 12,
    },
    userName: {
      margin: "12px 0 0 12px",
      color: "#007ad5",
      fontWeight: 700,
      fontSize: 14,
    },
  })
);
