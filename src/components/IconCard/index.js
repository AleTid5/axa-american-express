import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./styles";

export default function IconCard({
  icon,
  className,
  children,
  iconContainerClassName,
  xs,
  sm,
  md,
  lg,
  xl,
}) {
  const classes = styles();
  return (
    <Grid
      item
      xs={xs}
      sm={sm || xs}
      md={md || sm || xs}
      lg={lg || md || sm || xs}
      xl={xl || lg || md || sm || xs}
    >
      <Grid container className={`${classes.container} ${className || ""}`}>
        <Grid
          item
          xs={3}
          sm={2}
          className={iconContainerClassName || classes.middleAlign}
        >
          <img alt="icon" src={icon} className={classes.icon} />
        </Grid>
        <Grid item xs={9} sm={10}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
