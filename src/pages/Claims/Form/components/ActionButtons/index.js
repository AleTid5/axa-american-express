import React from "react";
import { Button, Grid } from "@material-ui/core";
import styles from "./styles";

export default function ActionButtons({ refs }) {
  const classes = styles();

  const handleContinue = () => {
    const form = {};

    refs.forEach((ref) => {
      ref.current.validate();
      Object.assign(form, { ...ref.current.getProps() });
    });

    console.log(form);
  };

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={6} md={4}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={classes.secondaryButton}
        >
          Anterior
        </Button>
      </Grid>
      <Grid item xs={6} md={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.primaryButton}
          onClick={handleContinue}
        >
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
}
