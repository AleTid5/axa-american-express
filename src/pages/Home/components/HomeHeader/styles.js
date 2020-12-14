import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    container: {
      padding: "20px 0 20px",
      textAlign: "center",
    },
    typographyH6: {
      fontWeight: 300,
    },
  })
);
