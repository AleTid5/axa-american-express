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
        border: "3px solid #f0f0f0",
      },
      inputDarkRoot: {
        ...root,
        border: "1px solid #d5d5d5",
      },
      inputOutlined: {
        padding: "15px 14px",
        [theme.breakpoints.up("sm")]: {
          padding: "16px 14px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "14px 14px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "18px 14px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "22px 14px",
        },
      },
    }),
  { index: 1 }
);
