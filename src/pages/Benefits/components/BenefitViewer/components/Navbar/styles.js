import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    navbarContainer: {
      gridColumn: "1/6",
    },
    iconImage: {
      maxHeight: 25,
    },
  })
);
