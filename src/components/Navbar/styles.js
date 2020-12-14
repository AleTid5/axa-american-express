import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    appbar: {
      ...styles.whiteBackground,
      padding: "10px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    horizontalDivider: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: "50px",
    },
  })
);
