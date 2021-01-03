import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../MainForm/styles";

const paragraph = (theme) => ({
  fontWeight: 300,
  fontSize: 14,
  [theme.breakpoints.up("sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 18,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: 25,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      container: {
        marginTop: 10,
      },
      paragraph1: {
        ...paragraph(theme),
      },
      paragraph2: {
        marginTop: 20,
        ...paragraph(theme),
      },
      radioMarginTop: {
        marginTop: 15,
        [theme.breakpoints.up("sm")]: {
          marginTop: 25,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 40,
        },
      },
    }),
  { index: 1 }
);
