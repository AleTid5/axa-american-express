import stylesRoot from "../../assets/styles";

export default function styles(theme) {
  return {
    ...stylesRoot,
    title: {
      fontWeight: 700,
      fontSize: 12,
      [theme.breakpoints.up("xs")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20,
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
