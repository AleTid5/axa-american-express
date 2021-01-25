import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

const subtitle = (theme) => ({
  textAlign: "center",
  fontWeight: 700,
  fontSize: 16,
  marginTop: 10,
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 22,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 24,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: 28,
    marginTop: 20,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      iconContainer: {
        ...styles.centerAlign,
        marginTop: 10,
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
      },
      icon: {
        maxWidth: 70,
        [theme.breakpoints.up("xl")]: {
          maxWidth: 100,
        },
      },
      title: {
        color: theme.palette.primary.main,
        textAlign: "center",
        fontWeight: 700,
        fontSize: 18,
        marginTop: 10,
        [theme.breakpoints.up("sm")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 24,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 28,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 32,
          marginTop: 20,
        },
      },
      fileName: {
        ...subtitle(theme),
        fontWeight: 300,
      },
      subtitle: subtitle(theme),
      button: {
        ...styles.primaryDarkBackground,
        ...styles.textWhite,
        borderRadius: 0,
        textTransform: "capitalize",
        fontWeight: 800,
        width: "100%",
        fontSize: 15,
        margin: "20px 0",
        [theme.breakpoints.up("sm")]: {
          width: 110,
          height: 45,
          fontSize: 15,
          margin: "20px 0",
        },
        [theme.breakpoints.up("xl")]: {
          width: 130,
          height: 50,
          fontSize: 17,
          margin: "30px 0",
        },
      },
      tableCellHead: {
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
        },
      },
      tableCellRoot: {
        borderBottom: `2px solid ${theme.palette.primary.dark}`,
      },
    }),
  { index: 1 }
);
