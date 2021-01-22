import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      root: {
        width: "100%",
        height: 18,
        borderRadius: 10,
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 10,
        backgroundColor: theme.palette.primary.main,
      },
    }),
  { index: 1 }
);
