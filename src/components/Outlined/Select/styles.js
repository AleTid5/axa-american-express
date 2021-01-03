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
        border: "3px solid #f0f0f0",
        borderRadius: 8,
        backgroundColor: "white",
      },
      selectOutlined: {
        padding: "15px 14px",
        [theme.breakpoints.up("sm")]: {
          padding: "22px 14px",
        },
      },
      selectIcon: {
        color: "black",
        fontSize: 30,
        top: "calc(50% - 14px)",
        [theme.breakpoints.up("sm")]: {
          fontSize: 40,
          top: "calc(50% - 18px)",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 45,
          top: "calc(50% - 20px)",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 50,
          top: "calc(50% - 22px)",
        },
      },
    }),
  { index: 1 }
);
