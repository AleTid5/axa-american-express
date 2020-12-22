import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    container: {
      ...styles.textWhite,
      backgroundColor: "#00175a",
      padding: "16px 0 16px 16px",
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
    title: {
      fontWeight: 300,
      fontSize: 20,
      [theme.breakpoints.up("md")]: {
        fontSize: 25,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 30,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 40,
      },
    },
    subtitle: {
      fontWeight: 300,
      lineHeight: 1,
      fontSize: 14,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 25,
      },
    },
  })
);
