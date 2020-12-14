import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    appFooter: {
      ...styles.whiteBackground,
    },
    languageContainer: {
      padding: "32px 0 0 8px",
    },
    languageLabel: {
      ...styles.alignSelfCenter,
      ...styles.textPrimaryDark,
      fontWeight: 700,
    },
    selectRoot: {
      ...styles.textPrimaryDark,
    },
    select: {
      fontSize: 12,
      ...styles.textPrimaryDark,
      fontWeight: 700,
    },
    actionsContainer: {
      padding: "16px 0 0 8px",
    },
    copyrightContainer: {
      padding: "0 0 32px 8px",
    },
  })
);
