import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxHeight: 200,
        overflowY: "auto",
      },
    }),
  { index: 1 }
);
