import React from "react";
import { Grid, Typography } from "@material-ui/core";
import iconCar from "../../../../../assets/icons/ico-seguro-de-alquiler-auto.png";
import styles from "./styles";

export default function FormHeader() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={2} sm={1} className={classes.iconContainer}>
          <img alt="Card Icon" src={iconCar} className={classes.icon} />
        </Grid>
        <Grid item xs={10} sm={11} className={classes.textContainer}>
          <Typography className={classes.text}>
            Template de Librería para Formularios
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
