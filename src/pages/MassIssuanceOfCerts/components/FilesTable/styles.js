import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/styles";

const tableCellRow = (theme) => ({
  fontWeight: 500,
  minWidth: 200,
  fontSize: 12,
  [theme.breakpoints.up("sm")]: {
    minWidth: "auto",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 14,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: 16,
  },
});

export default makeStyles(
  (theme) =>
    createStyles({
      ...styles,
      title: {
        color: theme.palette.primary.main,
        textAlign: "left",
        fontWeight: 900,
        fontSize: 14,
        [theme.breakpoints.up("md")]: {
          fontSize: 22,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 24,
        },
      },
      tableContainerRoot: {
        boxShadow: "none",
        backgroundColor: "transparent",
        [theme.breakpoints.up("lg")]: {
          marginTop: 10,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 20,
        },
      },
      tableCellHead: {
        fontSize: 14,
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 22,
        },
      },
      tableCellRow: tableCellRow(theme),
      tableCellLinkRow: {
        minWidth: 210,
        [theme.breakpoints.up("md")]: {
          minWidth: "auto",
        },
      },
      link: {
        ...tableCellRow(theme),
        color: theme.palette.primary.dark,
        textDecoration: "underline",
      },
      paginationContainer: {
        marginTop: 10,
        [theme.breakpoints.up("sm")]: {
          marginTop: 20,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: 30,
        },
        [theme.breakpoints.up("lg")]: {
          marginTop: 40,
        },
        [theme.breakpoints.up("xl")]: {
          marginTop: 60,
        },
      },
      filesPerPage: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      },
      labelFilesMR: {
        marginRight: 20,
      },
      divider: {
        backgroundColor: "#0d2a6f",
        margin: "20px 0",
      },
      pagination: {
        display: "flex",
        justifyContent: "center",
      },
      paginationUl: {
        "& button": {
          opacity: 1,
          color: theme.palette.primary.main,
        },
        "& button.Mui-selected": {
          backgroundColor: `${theme.palette.primary.main}!important`,
          color: "white",
          borderRadius: 10,
        },
      },
    }),
  { index: 1 }
);
