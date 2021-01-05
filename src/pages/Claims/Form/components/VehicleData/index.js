import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { CustomRadio, OutlinedInput } from "../../../../../components/Extended";
import { CalendarToday } from "@material-ui/icons";
import CustomCheckbox from "../../../../../components/Extended/Checkbox";

export default forwardRef(function VehicleData(props, ref) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [rentedDays, setRentedDays] = useState("");
  const [rentInAXACard, setRentInAXACard] = useState("total-rent-in-axa-card");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [hasInsurancePolicy, setHasInsurancePolicy] = useState(
    "has-insurance-policy"
  );
  const [acceptTerms, setAcceptTerms] = useState(false);
  const classes = styles();

  useImperativeHandle(ref, () => ({
    validate: () =>
      brand !== "" &&
      model !== "" &&
      color !== "" &&
      year !== "" &&
      rentedDays !== "" &&
      rentalDate !== "" &&
      returnDate !== "" &&
      acceptTerms,
    getProps: () => ({
      brand,
      model,
      color,
      year,
      rentedDays,
      rentInAXACard,
      rentalDate,
      returnDate,
      hasInsurancePolicy,
      acceptTerms,
    }),
  }));

  return (
    <div className={classes.container}>
      <Typography className={`${classes.title} ${classes.titleContainer}`}>
        Datos de Vehículo Alquilado
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <OutlinedInput
            title="Marca de coche"
            value={brand}
            setValue={setBrand}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <OutlinedInput
            title="Modelo de coche"
            value={model}
            setValue={setModel}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing1}>
        <Grid item xs={12} md={5}>
          <OutlinedInput title="Color" value={color} setValue={setColor} />
        </Grid>
        <Grid item xs={12} md={7}>
          <OutlinedInput title="Año" value={year} setValue={setYear} />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing1}>
        <Grid item xs={12} md={5}>
          <OutlinedInput
            title="Cantidad de días por la cual alquiló el vehículo"
            value={color}
            setValue={setRentedDays}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CustomRadio
            title="¿Cargó la totalidad del costo de alquiler a su tarjeta American Express?"
            layoutHorizontally
            value={rentInAXACard}
            setValue={setRentInAXACard}
            options={[
              {
                label: "Si",
                value: "total-rent-in-axa-card",
              },
              {
                label: "No",
                value: "partial-rent-in-axa-card",
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing2}>
        <Grid item xs={12} md={6}>
          <OutlinedInput
            title="Fecha de alquiler"
            value={rentalDate}
            setValue={setRentalDate}
            startIcon={<CalendarToday />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <OutlinedInput
            title="Fecha de regreso"
            value={returnDate}
            setValue={setReturnDate}
            startIcon={<CalendarToday />}
          />
        </Grid>
      </Grid>
      <CustomRadio
        title="¿Posee una póliza de seguro o cualquier otro seguro que pudiera cubrir esta pérdida?"
        layoutHorizontally
        value={hasInsurancePolicy}
        setValue={setHasInsurancePolicy}
        className={classes.spacing3}
        options={[
          {
            label: "Si",
            value: "has-insurance-policy",
          },
          {
            label: "No",
            value: "without-insurance-policy",
          },
        ]}
      />
      <CustomCheckbox
        value={acceptTerms}
        setValue={setAcceptTerms}
        className={classes.spacing2}
      />
    </div>
  );
});
