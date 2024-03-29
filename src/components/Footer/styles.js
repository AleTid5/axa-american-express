import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      appFooter: {
        ...styles.whiteBackground,
        borderTop: "4px solid #575757",
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
        border: `1px solid ${theme.palette.primary.dark}`,
        padding: 5,
      },
      actionsContainer: {
        padding: "16px 0 0 8px",
      },
      copyrightContainer: {
        padding: "0 0 32px 8px",
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    }),
  { index: 1 }
);
