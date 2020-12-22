import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    mobileContainer: {
      display: "grid",
      gridTemplateRows: "42px auto",
      gridTemplateColumns: "1fr",
      padding: "0 0 50px 0",
    },
    container: {
      display: "grid",
      padding: "0 0 50px 0",
      gridTemplateColumns: "25% 50% 25%",
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
    mobileMainActions: {
      ...styles.whiteBackground,
      gridRow: 1,
      gridColumn: "1 / 2 span",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      overflowX: "auto",
      [theme.breakpoints.up(240)]: {
        minWidth: 240,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "unset",
        overflowX: "unset",
      },
    },
    mainActions: {
      ...styles.whiteBackground,
      gridColumn: 1,
      padding: 16,
      maxWidth: "unset",
    },
    mobileActionContainer: {
      cursor: "pointer",
      display: "grid",
      gridTemplateRows: "repeat(2, 1fr)",
      padding: 0,
      [theme.breakpoints.up("sm")]: {
        padding: 16,
      },
    },
    actionContainer: {
      cursor: "pointer",
      display: "grid",
      gridTemplateColumns: "25% 60% 15%",
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "25% 65% 10%",
        height: 60,
      },
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "25% 60% 15%",
        height: 84,
      },
      [theme.breakpoints.up("xl")]: {
        height: 110,
      },
    },
    mobileIcon: {
      gridRow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      gridColumn: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    iconImage: {
      maxHeight: "unset",
      maxWidth: 35,
      [theme.breakpoints.up("lg")]: {
        maxWidth: 50,
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "100%",
      },
    },
    mobileTitle: {
      ...styles.textPrimaryDark,
      gridRow: 2,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      textAlign: "center",
      fontSize: 9,
      [theme.breakpoints.up("xs")]: {
        fontSize: 11,
      },
    },
    title: {
      ...styles.textPrimaryDark,
      gridColumn: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      fontWeight: 300,
      [theme.breakpoints.up("md")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    rightArrowContainer: {
      ...styles.textPrimary,
      gridColumn: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    rightArrowIcon: {
      [theme.breakpoints.up("lg")]: {
        fontSize: 26,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 60,
      },
    },
    mobileMainContent: {
      backgroundColor: "transparent",
      gridRow: 2,
    },
    mainContent: {
      backgroundColor: "transparent",
      gridColumn: 2,
    },
    mobileMainBanner: {
      backgroundColor: "transparent",
      gridRow: 3,
      display: "flex",
      alignItems: "center",
      padding: 10,
    },
    mainBanner: {
      backgroundColor: "transparent",
      gridColumn: 3,
    },
    mobileImageBanner: {
      width: "100%",
      height: 120,
      [theme.breakpoints.up("sm")]: {
        height: 180,
      },
    },
    imageBanner: {
      maxWidth: "100%",
      marginTop: 0,
      [theme.breakpoints.up("md")]: {
        marginTop: 20,
      },
    },
    mobileNavbarTitle: {
      ...styles.textPrimary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      paddingLeft: 15,
      fontSize: 12,
      [theme.breakpoints.up("xs")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
      },
    },
  })
);
