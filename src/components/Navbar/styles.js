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
    menuList: {
      ...styles.textPrimaryDark,
      padding: 0,
      backgroundColor: "#e9e9e9",
    },
    menuPaper: {
      marginTop: 0,
    },
    userIcon: {
      marginTop: 12,
    },
    userName: {
      margin: "12px 0 0 12px",
      color: "#007ad5",
      fontWeight: 700,
      fontSize: 14,
    },
  })
);
