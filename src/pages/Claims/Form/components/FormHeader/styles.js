import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        height: 65,
      },
      iconContainer: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 12,
        maxWidth: 70,
      },
      icon: {
        filter: "brightness(0) invert(1)",
        width: 50,
      },
      textContainer: {
        paddingLeft: 15,
      },
      text: {
        color: "white",
        fontWeight: 300,
        fontSize: 40,
      },
    }),
  { index: 1 }
);
