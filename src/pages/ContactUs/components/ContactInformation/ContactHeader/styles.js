import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

const text = (theme) => ({
  fontSize: 12,
  [theme.breakpoints.up("xs")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 18,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 22,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: 27,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 20,
        [theme.breakpoints.up("md")]: {
          marginTop: 25,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 30,
        },
      },
      text: {
        ...text(theme),
      },
      link: {
        ...text(theme),
        fontWeight: 800,
        textDecoration: "underline",
        color: "#1f61ff",
      },
    }),
  { index: 1 }
);
