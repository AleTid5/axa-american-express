import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      navbarContainer: {
        gridColumn: "1/6",
      },
      iconImage: {
        maxHeight: 20,
        [theme.breakpoints.up("xs")]: {
          maxHeight: 25,
        },
      },
      title: {
        ...styles.textPrimaryDark,
        gridRow: 2,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "center",
        fontSize: 9,
        [theme.breakpoints.up("xs")]: {
          fontSize: 11,
        },
      },
      downArrowContainer: {
        flexGrow: 1,
        textAlign: "right",
      },
      iconContainer: {
        minWidth: 40,
        [theme.breakpoints.up("xs")]: {
          minWidth: 55,
        },
      },
    }),
  { index: 1 }
);
