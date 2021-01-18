import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles";

const root = {
  borderRadius: 8,
  backgroundColor: "white",
};

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles(theme),
      input: {
        paddingTop: 5,
      },
      inputLightRoot: {
        ...root,
      },
      inputDarkRoot: {
        ...root,
        border: "1px solid #d5d5d5",
      },
      inputOutlined: {
        padding: "15px 14px",
        [theme.breakpoints.up("sm")]: {
          padding: "0px 14px 25px 14px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "0px 14px 25px 14px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0px 14px 45px 14px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0px 14px 55px 14px",
        },
      },
      subtitle: {
        userSelect: "none",
        fontWeight: 300,
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 14,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 24,
        },
      },
    }),
  { index: 1 }
);
