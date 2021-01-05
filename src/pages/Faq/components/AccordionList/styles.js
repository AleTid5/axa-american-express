import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      container: {
        marginTop: 30,
      },
      accordionRoot: {
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": {
          backgroundColor: "#616161",
          height: 2,
        },
      },
      accordionExpanded: {
        margin: "0 !important",
        borderBottom: "2px solid #616161",
        "&:before": {
          opacity: "1 !important",
        },
      },
      accordionSummaryRoot: {
        justifyContent: "flex-start",
        padding: "15px 0",
      },
      accordionSummaryExpanded: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      accordionSummaryContent: {
        flexGrow: "unset",
      },
      accordionDetailsRoot: {
        padding: "0 0 24px",
      },
      title: {
        color: theme.palette.primary.dark,
        textDecoration: "underline",
        fontWeight: 800,
        fontSize: 18,
        "& sup": {
          fontSize: 12,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
          "& sup": {
            fontSize: 14,
          },
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 26,
          "& sup": {
            fontSize: 16,
          },
        },
      },
    }),
  { index: 1 }
);
