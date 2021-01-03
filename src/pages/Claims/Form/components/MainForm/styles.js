import stylesRoot from "../../../../../assets/styles";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const container = (theme) => ({
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
});

export const mainStyles = () =>
  makeStyles(
    (theme) =>
      createStyles({
        ...styles(theme),
        ...container(theme),
        container: {
          marginTop: 20,
        },
      }),
    { index: 1 }
  );

export default function styles(theme) {
  return {
    ...stylesRoot,
    ...container(theme),
    title: {
      color: theme.palette.primary.main,
      fontSize: 16,
      [theme.breakpoints.up("xs")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 24,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 22,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 26,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 32,
      },
    },
  };
}
