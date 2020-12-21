import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    mobileContainer: {
      ...styles.whiteBackground,
      display: "grid",
      gridTemplateRows: "110px auto",
      gridTemplateColumns: "70% 30%",
      padding: 0,
    },
    container: {
      ...styles.whiteBackground,
      display: "grid",
      padding: 0,
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
      gridColumn: 1,
      padding: 16,
      maxWidth: "unset",
    },
    mobileActionContainer: {
      display: "grid",
      gridTemplateRows: "repeat(2, 1fr)",
      padding: 0,
      [theme.breakpoints.up("sm")]: {
        padding: 16,
      },
    },
    actionContainer: {
      display: "grid",
      gridTemplateColumns: "25% 60% 15%",
      [theme.breakpoints.up("md")]: {
        height: 60,
      },
      [theme.breakpoints.up("lg")]: {
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
      maxHeight: 25,
      [theme.breakpoints.up("sm")]: {
        maxHeight: 25,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 40,
      },
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
        fontSize: 10,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    mobileRightArrowContainer: {
      ...styles.textPrimary,
      gridRow: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      fontSize: 15,
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
      ...styles.greyBackground,
      gridRow: 2,
    },
    mainContent: {
      ...styles.greyBackground,
      gridColumn: 2,
    },
    mobileMainBanner: {
      ...styles.greyBackground,
      gridRow: 2,
      display: "flex",
      alignItems: "center",
    },
    mainBanner: {
      ...styles.greyBackground,
      gridColumn: 3,
    },
    imageBanner: {
      maxWidth: "100%",
      marginTop: 0,
      [theme.breakpoints.up("md")]: {
        marginTop: 20,
      },
    },
  })
);
