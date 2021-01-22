import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      carouselBorder: {
        [theme.breakpoints.up("sm")]: {
          borderTop: "10px solid white",
        },
      },
    }),
  { index: 1 }
);
