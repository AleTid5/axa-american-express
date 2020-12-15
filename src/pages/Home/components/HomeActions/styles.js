import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    gridRoot: {
      display: "grid",
      gridTemplateColumns: "0 100% 0",
      position: "relative",
    },
    root: {
      flexGrow: 1,
      gridColumn: 2,
      justifyContent: "center",
    },
    box: {
      padding: 30,
      textAlign: "center",
      width: 160,
      height: 130,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      fontSize: 30,
    },
    title: {
      ...styles.mt5,
      fontSize: 11,
      fontWeight: "bold",
    },
  })
);
