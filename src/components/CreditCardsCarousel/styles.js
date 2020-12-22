import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

const image = {
  ...styles.mb15,
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
    cardTitle: {
      fontSize: 12,
      whiteSpace: "nowrap",
      paddingBottom: 0,
      [theme.breakpoints.up(264)]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("xs")]: {
        fontSize: 16,
        paddingBottom: 10,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
        paddingBottom: 20,
      },
      [theme.breakpoints.up(601)]: {
        fontSize: 16,
        paddingBottom: 0,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 18,
        paddingBottom: 20,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 23,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 30,
      },
    },
    creditCard: {
      padding: 10,
      textAlign: "center",
    },
    slider: {
      minHeight: "calc(20vh + 45px)",
      display: "flex",
      alignItems: "flex-end",
    },
    image: { ...image },
    selectedImage: {
      ...image,
      position: "relative",
      top: -20,
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
      whiteSpace: "nowrap",
    },
    selectedTitle: {
      ...styles.mt5,
      color: "black",
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
    subtitle: {
      color: "#949494",
    },
    selectedSubtitle: {
      color: "black",
    },
  })
);
