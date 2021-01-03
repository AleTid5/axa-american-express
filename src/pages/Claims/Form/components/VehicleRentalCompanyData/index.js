import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import {
  OutlinedSelect,
  OutlinedInput,
} from "../../../../../components/Outlined";
import { countries } from "../../../../../mocks/countries.mock";

export default forwardRef(function VehicleRentalCompanyData(props, ref) {
  const [companyCountry, setCompanyCountry] = useState("");
  const [rentalCompany, setRentalCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const classes = styles();

  useImperativeHandle(ref, () => ({
    validate: () =>
      companyCountry !== "" && rentalCompany !== "" && phoneNumber !== "",
    getProps: () => ({
      companyCountry,
      rentalCompany,
      phoneNumber,
    }),
  }));

  return (
    <div className={classes.container}>
      <Typography className={`${classes.title} ${classes.titleMargin}`}>
        Datos de la Compañía de Alquiler de Vehículo
      </Typography>
      <OutlinedInput
        title="Compañía de alquiler"
        value={rentalCompany}
        setValue={setRentalCompany}
      />
      <Grid container spacing={2} className={classes.rowContainer}>
        <Grid item xs={12} md={5}>
          <OutlinedSelect
            title="País"
            list={countries}
            value={companyCountry}
            setValue={setCompanyCountry}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <OutlinedInput
            title="Teléfono celular"
            type="number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
        </Grid>
      </Grid>
    </div>
  );
});
