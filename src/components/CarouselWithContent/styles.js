import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/styles";

const title = {
  fontWeight: "bold",
  gridRow: 1,
};

const button = (theme) => ({
  backgroundColor: theme.palette.primary.dark,
  gridRow: 3,
  marginTop: 10,
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      carouselBorderTop: {
        borderTop: `20px solid ${theme.palette.primary.main}`,
        [theme.breakpoints.up("xl")]: {
          borderTop: `30px solid ${theme.palette.primary.main}`,
        },
      },
      carouselImage: {
        height: 300,
        display: "grid",
        gridTemplateRows: "15% 55%",
        [theme.breakpoints.up("md")]: {
          height: 400,
        },
        [theme.breakpoints.up("lg")]: {
          height: 500,
        },
        [theme.breakpoints.up("xl")]: {
          height: 600,
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
      right_primary_content: {
        display: "grid",
        gridTemplateColumns: "repeat(40, 1fr)",
        gridRow: 2,
      },
      right_primary_title: {
        ...title,
        ...styles.textPrimaryDark,
        fontSize: 18,
        gridColumn: "1/40",
        [theme.breakpoints.up("sm")]: {
          gridColumn: "25/39",
          fontSize: 18,
          textAlign: "right",
        },
        [theme.breakpoints.up("md")]: {
          gridColumn: "25/39",
          fontSize: 30,
          textAlign: "right",
        },
        [theme.breakpoints.up("lg")]: {
          gridColumn: "25/39",
          fontSize: 38,
          textAlign: "right",
        },
        [theme.breakpoints.up("xl")]: {
          gridColumn: "25/39",
          fontSize: 54,
          textAlign: "right",
        },
      },
      right_primary_subtitle: {
        ...styles.textPrimaryDark,
        gridRow: 2,
        fontSize: 15,
        gridColumn: "1/40",
        lineHeight: 1.2,
        [theme.breakpoints.up("sm")]: {
          gridColumn: "-16 / span 13",
          fontSize: 14,
          marginTop: 10,
          textAlign: "right",
        },
        [theme.breakpoints.up("md")]: {
          gridColumn: "-14 / span 11",
          fontSize: 20,
          marginTop: 10,
          textAlign: "right",
        },
        [theme.breakpoints.up("lg")]: {
          gridColumn: "-14 / span 11",
          fontSize: 26,
          marginTop: -20,
          textAlign: "right",
        },
        [theme.breakpoints.up("xl")]: {
          gridColumn: "-14 / span 11",
          fontSize: 37,
          marginTop: -30,
          textAlign: "right",
        },
      },
      right_primary_button: {
        ...button(theme),
        ...styles.textWhite,
        gridColumn: "5/35",
        fontSize: 14,
        textTransform: "capitalize",
        fontWeight: 300,
        height: 35,
        [theme.breakpoints.up("sm")]: {
          gridColumn: "29/39",
          fontSize: 12,
          height: 30,
        },
        [theme.breakpoints.up("md")]: {
          gridColumn: "31/39",
          fontSize: 18,
          height: 40,
        },
        [theme.breakpoints.up("lg")]: {
          gridColumn: "31/39",
          fontSize: 22,
          height: 50,
        },
        [theme.breakpoints.up("xl")]: {
          gridColumn: "31/39",
          marginLeft: 35,
          fontSize: 25,
          height: 70,
        },
      },
      left_white_content: {
        display: "grid",
        gridTemplateColumns: "repeat(20, 1fr)",
        gridRow: 2,
        [theme.breakpoints.up("xl")]: {
          margin: "15px 0 0 35px",
          gridRow: 1,
        },
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
      left_white_subtitle: {
        ...styles.textWhite,
        gridRow: 2,
        textAlign: "left",
        fontSize: 10,
        gridColumn: "2/20",
        fontWeight: "bold",
        [theme.breakpoints.up("sm")]: {
          gridColumn: "1/5",
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
    }),
  { index: 1 }
);
