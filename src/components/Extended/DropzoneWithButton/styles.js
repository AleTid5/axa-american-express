import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      iconDelete: {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    }),
  { index: 1 }
);
