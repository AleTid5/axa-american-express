import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        [theme.breakpoints.up("xl")]: {
          padding: "0 60px",
        },
      },
      subtitle: {
        ...styles.textAlignCenter,
        fontWeight: 400,
        marginTop: 15,
        fontSize: 14,
        [theme.breakpoints.up("md")]: {
          marginTop: 40,
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 45,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 50,
          fontSize: 22,
        },
      },
      filesContainer: {
        marginTop: 30,
        [theme.breakpoints.up("md")]: {
          marginTop: 30,
        },
      },
      iconContainer: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
          justifyContent: "left",
          maxWidth: 70,
        },
      },
      icon: {
        maxWidth: 50,
      },
      progressUploaderContainer: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        [theme.breakpoints.up("sm")]: {
          paddingLeft: 0,
        },
        "& > div": {
          fontWeight: 300,
          fontSize: 14,
          [theme.breakpoints.up("md")]: {
            fontSize: 16,
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: 18,
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: 22,
          },
        },
      },
      uploadFileTitle: {
        textAlign: "left",
        fontWeight: 300,
        fontSize: 16,
        marginTop: 30,
        [theme.breakpoints.up("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 45,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 26,
        },
      },
      progressContainer: {
        marginTop: 10,
        [theme.breakpoints.up("lg")]: {
          marginTop: 20,
        },
      },
      progressLabelContainer: {
        [theme.breakpoints.up("sm")]: {
          maxWidth: 170,
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 180,
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 170,
        },
      },
      progress: {
        fontWeight: 700,
        textAlign: "center",
        fontSize: 14,
        [theme.breakpoints.up("sm")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("md")]: {
          textAlign: "left",
        },
      },
      filesMarginTop: {
        marginTop: 50,
        [theme.breakpoints.up("md")]: {
          marginTop: 70,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 90,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 100,
        },
      },
    }),
  { index: 1 }
);
