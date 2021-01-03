import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  OutlinedInput,
  OutlinedSelect,
} from "../../../../../components/Outlined";
import styles from "./styles";
import { countries } from "../../../../../mocks/countries.mock";

export default forwardRef(function Location(props, ref) {
  const [vehicleCountry, setVehicleCountry] = useState("");
  const [location, setLocation] = useState("");
  const classes = styles();

  useImperativeHandle(ref, () => ({
    validate: () => vehicleCountry !== "" && location !== "",
    getProps: () => ({
      country: vehicleCountry,
      location,
    }),
  }));

  return (
    <div className={classes.container}>
      <Typography className={`${classes.title} ${classes.titleContainer}`}>
        Ubicación
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <OutlinedInput
            title="Ciudad compañía"
            value={location}
            setValue={setLocation}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <OutlinedSelect
            title="País"
            list={countries}
            value={vehicleCountry}
            setValue={setVehicleCountry}
          />
        </Grid>
      </Grid>
    </div>
  );
});
