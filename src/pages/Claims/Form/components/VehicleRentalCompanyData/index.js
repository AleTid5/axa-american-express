import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles";
import {
  OutlinedSelect,
  OutlinedInput,
} from "../../../../../components/Outlined";

export default forwardRef(function VehicleRentalCompanyData(props, ref) {
  const [rentalCompany, setRentalCompany] = useState("");
  const [country, setCountry] = useState("");
  const classes = styles();

  useImperativeHandle(ref, () => ({
    validate: () => console.log(false),
  }));

  return (
    <div className={classes.container}>
      <Typography>Datos de la Compañía de Alquiler de Vehículo</Typography>
      <OutlinedInput
        title="Compañía de alquiler"
        value={rentalCompany}
        setValue={setRentalCompany}
      />
      <OutlinedSelect
        title="País"
        list={[{ value: "Arg", label: "Argentina" }]}
        selectedValue={country}
        setSelectedValue={setCountry}
      />
    </div>
  );
});
