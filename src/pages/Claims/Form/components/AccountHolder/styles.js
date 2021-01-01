import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../MainForm/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 20,
      },
    }),
  { index: 1 }
);
