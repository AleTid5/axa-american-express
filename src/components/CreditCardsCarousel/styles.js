import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

const image = {
  width: "100%",
  maxWidth: 180,
  margin: "auto",
  cursor: "pointer",
};

export default makeStyles((theme) =>
  createStyles({
    ...styles,
    container: {
      ...styles.mt30,
      padding: "0 32px 0 32px",
    },
    creditCard: {
      padding: 10,
      textAlign: "center",
    },
    slider: {
      minHeight: "calc(18vh + 40px)",
      display: "flex",
      alignItems: "flex-end",
    },
    image: { ...image, ...styles.mb15 },
    selectedImage: {
      ...image,
      position: "relative",
      top: -30,
    },
    shadow: {
      width: "75%",
      height: 10,
      background: "radial-gradient(#00000047, #ffffff00)",
      borderRadius: "100%",
      margin: "auto",
      opacity: 0.5,
    },
    title: {
      ...styles.mt5,
      color: "#949494",
    },
    selectedTitle: {
      ...styles.mt5,
      color: "black",
      fontWeight: 700,
    },
    subtitle: {
      color: "#949494",
    },
    selectedSubtitle: {
      color: "black",
    },
  })
);
