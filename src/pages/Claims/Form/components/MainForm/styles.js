import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 20,
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
    }),
  { index: 1 }
);
