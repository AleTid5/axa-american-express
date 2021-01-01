import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      select: {
        paddingTop: 5,
      },
      selectRoot: {
        borderRadius: 8,
      },
      selectOutlined: {
        backgroundColor: "white",
        padding: "15px 14px",
        [theme.breakpoints.up("sm")]: {
          padding: "25px 14px",
        },
      },
    }),
  { index: 1 }
);
