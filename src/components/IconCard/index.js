import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./styles";

export default function IconCard({ icon, children }) {
  const classes = styles();
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Grid container className={classes.container}>
        <Grid item xs={3} sm={2} className={classes.iconContainer}>
          <img alt="icon" src={icon} className={classes.icon} />
        </Grid>
        <Grid item xs={9} sm={10}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
