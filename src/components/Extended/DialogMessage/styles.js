import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      formControl: {
        paddingTop: 5,
      },
    }),
  { index: 1 }
);
