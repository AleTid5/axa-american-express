import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    containerMaxWidthMd: {
      [theme.breakpoints.up("md")]: {
        maxWidth: 790,
      },
    },
    container: {
      ...styles.mt50,
      textAlign: "center",
      paddingBottom: 50,
    },
    typographyH4: {
      fontSize: "2rem",
      fontWeight: 300,
    },
    typographyH5: {
      fontWeight: 300,
    },
    typographyST1: {
      lineHeight: 1.3,
      fontWeight: 300,
    },
    icon: {
      ...styles.textPrimaryDark,
      fontSize: 50,
    },
    button: {
      ...styles.mt30,
      width: "100%",
      maxWidth: 200,
    },
  })
);
