import stylesRoot from "../../assets/styles";

export default function styles(theme) {
  return {
    ...stylesRoot,
    title: {
      fontSize: 14,
      fontWeight: 700,
      marginTop: 10,
      [theme.breakpoints.up("xs")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 23,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 28,
      },
    },
    notchedOutline: {
      border: "3px solid #f0f0f0",
    },
  };
}
