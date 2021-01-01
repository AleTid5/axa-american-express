import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      input: {
        paddingTop: 5,
      },
      inputRoot: {
        borderRadius: 8,
      },
      inputOutlined: {
        backgroundColor: "white",
        padding: "15px 14px",
        border: "3px solid #f0f0f0",
        borderRadius: 8,
        [theme.breakpoints.up("sm")]: {
          padding: "22px 14px",
        },
      },
    }),
  { index: 1 }
);
