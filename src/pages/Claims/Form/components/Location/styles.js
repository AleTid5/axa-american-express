import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../MainForm/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      container: {
        marginTop: 20,
      },
      titleContainer: {
        marginBottom: 5,
        [theme.breakpoints.up("xl")]: {
          marginBottom: 10,
        },
      },
    }),
  { index: 1 }
);
