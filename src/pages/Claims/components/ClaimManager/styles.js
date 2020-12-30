import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        padding: "0px 16px",
        [theme.breakpoints.up("md")]: {
          padding: "0px 0 80px 0",
          maxWidth: 850,
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0px 0 120px 0",
          maxWidth: 1100,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 1560,
        },
      },
      iconCardContainer: {
        [theme.breakpoints.up("lg")]: {
          maxWidth: 70,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 100,
        },
      },
      cardTitle: {
        color: theme.palette.primary.dark,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: 12,
        [theme.breakpoints.up("xs")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      cardSubtitle: {
        color: theme.palette.primary.dark,
        lineHeight: 1.2,
        fontWeight: 300,
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      cardMessage: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: 11,
        [theme.breakpoints.up("sm")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      iconsContainer: {
        display: "flex",
        alignItems: "center",
      },
      iconContainer: {
        display: "flex",
        justifyContent: "flex-end",
      },
      icon: {
        transform: "rotate(-45deg)",
        cursor: "pointer",
        color: theme.palette.primary.main,
        fontWeight: 400,
        [theme.breakpoints.up("xs")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("sm")]: {
          padding: 4,
          fontSize: 35,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 30,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 45,
        },
      },
      cardDivider: {
        backgroundColor: theme.palette.primary.main,
        height: 2,
        margin: "15px 0",
        [theme.breakpoints.up("md")]: {
          margin: "20px 0",
        },
        [theme.breakpoints.up("lg")]: {
          margin: "25px 0",
        },
        [theme.breakpoints.up("xl")]: {
          margin: "30px 0",
        },
      },
      cardButton: {
        textTransform: "initial",
        borderRadius: 2,
        padding: 8,
        [theme.breakpoints.up("xl")]: {
          padding: 10,
        },
      },
      cardButtonText: {
        fontWeight: 900,
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      divider: {
        marginTop: 60,
        height: 2,
      },
      button: {
        marginTop: 30,
        textTransform: "initial",
        fontWeight: 700,
        borderRadius: 2,
        padding: "8px 16px",
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },
      },
      buttonText: {
        fontWeight: 900,
        [theme.breakpoints.up("sm")]: {
          padding: "2px 50px 2px 0px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "3px 65px 3px 0px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "4px 100px 4px 0px",
        },
      },
      buttonIcon: {
        fontSize: "20px!important",
        [theme.breakpoints.up("sm")]: {
          fontSize: "22px!important",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "26px!important",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "24px!important",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "32px!important",
        },
      },
      paddingCard: {
        [theme.breakpoints.up("md")]: {
          padding: "16px 12px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "20px 12px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "25px 22px",
        },
      },
    }),
  { index: 1 }
);
