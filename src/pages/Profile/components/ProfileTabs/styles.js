import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 20,
      },
      tabContainer: {
        backgroundColor: "transparent",
      },
      tabRoot: {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      },
      tabIndicator: {
        height: 4,
        backgroundColor: theme.palette.primary.main,
      },
      selectedTab: {
        fontWeight: "700!important",
        color: theme.palette.primary.main,
      },
      textColorPrimaryTab: {
        fontWeight: 400,
        color: "#a3a3a3",
        textTransform: "initial",
        fontSize: 15,
        [theme.breakpoints.up("xs")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 21,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 23,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 30,
        },
      },
      wrapperTab: {
        alignItems: "flex-start",
        paddingBottom: 10,
      },
    }),
  { index: 1 }
);
