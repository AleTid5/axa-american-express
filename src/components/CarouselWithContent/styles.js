import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

const content = {
  display: "grid",
  gridTemplateColumns: "repeat(20, 1fr)",
};

const title = {
  fontSize: 30,
  fontWeight: "bold",
  gridRow: 1,
};

const subtitle = {
  fontSize: 18,
  gridRow: 2,
};

const button = (theme) => ({
  backgroundColor: theme.palette.primary.dark,
  gridRow: 3,
  marginTop: 10,
});

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
      [theme.breakpoints.up("lg")]: {
        height: 400,
      },
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
    left_white_content: {
      ...content,
      gridRow: 2,
      [theme.breakpoints.up("sm")]: {
        margin: "15px 0 0 35px",
        gridRow: 1,
      },
    },
    right_primary_content: {
      ...content,
      gridRow: 2,
    },
    left_white_title: {
      ...title,
      ...styles.textWhite,
      fontWeight: 400,
      fontSize: 35,
      maxWidth: "100%",
      gridColumn: "2/20",
      textAlign: "left",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "1/6",
        maxWidth: 225,
      },
    },
    right_primary_title: {
      ...title,
      ...styles.textPrimaryDark,
      gridColumn: "1/20",
      textAlign: "right",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "13/20",
      },
    },
    left_white_subtitle: {
      ...subtitle,
      ...styles.textWhite,
      textAlign: "left",
      fontSize: 10,
      gridColumn: "2/20",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "1/5",
      },
    },
    right_primary_subtitle: {
      ...subtitle,
      textAlign: "right",
      gridColumn: "1/20",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "-7 / span 5",
      },
    },
    left_white_button: {
      ...button(theme),
      ...styles.textPrimaryDark,
      backgroundColor: "white",
      gridColumn: "2/20",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "1/7",
        width: 176,
      },
    },
    right_primary_button: {
      ...button(theme),
      ...styles.textWhite,
      gridColumn: "10/20",
      [theme.breakpoints.up("sm")]: {
        gridColumn: "16/20",
      },
    },
  })
);
