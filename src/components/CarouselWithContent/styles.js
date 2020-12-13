import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    carouselBorderTop: {
      borderTop: `20px solid ${theme.palette.primary.main}`,
    },
    carouselImage: {
      height: 300,
      display: "grid",
      gridTemplateRows: "repeat(3, 1fr)",
    },
    carouselArrow: {
      position: "absolute",
      zIndex: 2,
      top: "calc(50% - 15px)",
      width: 30,
      height: 30,
      backgroundColor: "transparent",
      color: "white",
    },
    content: {
      gridRow: 2,
      display: "grid",
      gridTemplateColumns: "repeat(20, 1fr)",
    },
    title: {
      ...styles.textPrimaryDark,
      fontSize: 30,
      fontWeight: "bold",
      gridColumn: "13/20",
      gridRow: 1,
      textAlign: "right",
    },
    subtitle: {
      ...styles.textPrimaryDark,
      fontSize: 18,
      textAlign: "right",
      gridColumn: "-7 / span 5",
      gridRow: 2,
    },
    button: {
      backgroundColor: theme.palette.primary.dark,
      gridColumn: "16/20",
      gridRow: 3,
      marginTop: 10,
    },
  })
);
