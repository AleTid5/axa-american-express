import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      massButtonsContainer: {
        marginTop: 30,
        padding: "0 30px",
        [theme.breakpoints.up("md")]: {
          padding: "0 100px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0 30px",
        },
      },
      massButton: {
        width: "100%",
        textTransform: "capitalize",
        borderRadius: 0,
        fontWeight: 700,
        [theme.breakpoints.up("sm")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("md")]: {
          height: 60,
          fontSize: 17,
          padding: "8px 10px",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 21,
          padding: "8px 14px",
        },
      },
      subtitle: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        marginTop: 15,
        textAlign: "center",
        fontSize: 18,
        [theme.breakpoints.up("md")]: {
          marginTop: 50,
          fontSize: 20,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 60,
          fontSize: 22,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 70,
          fontSize: 26,
        },
      },
      uploadButtonsContainer: {
        marginTop: 5,
        padding: "0 30px",
        [theme.breakpoints.up("md")]: {
          padding: "0 250px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0 210px",
        },
      },
      uploadButton: {
        width: "100%",
        textTransform: "capitalize",
        borderRadius: 0,
        fontWeight: 700,
        textAlign: "left",
        [theme.breakpoints.up("sm")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("md")]: {
          height: 60,
          fontSize: 18,
          padding: "8px 10px",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 22,
          padding: "8px 14px",
        },
      },
      uploadButtonLabel: {
        display: "flex",
        justifyContent: "flex-start",
        "& span": {
          position: "absolute",
          right: 20,
        },
      },
    }),
  { index: 1 }
);
