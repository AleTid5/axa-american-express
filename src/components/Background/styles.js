import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) =>
    createStyles({
      solid: {
        backgroundColor: "#E6E6E6",
      },
      gradient: {
        background:
          "linear-gradient(to bottom, rgba(242,242,242,1) 0%, rgba(255,255,255,1) 100%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#ffffff', GradientType=0 )",
      },
    }),
  { index: 1 }
);
