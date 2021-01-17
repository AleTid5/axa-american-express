import React, { useRef } from "react";
import { Container } from "@material-ui/core";
import AccountHolder from "../AccountHolder";
import Location from "../Location";
import ExtraComponents from "../ExtraComponents";
import VehicleData from "../VehicleData";
import VehicleRentalCompanyData from "../VehicleRentalCompanyData";
import ActionButtons from "../ActionButtons";
import FormHeader from "../FormHeader";
import { mainStyles } from "./styles";

export default function MainForm() {
  const classes = mainStyles();
  const accountHolderRef = useRef(null);
  const locationRef = useRef(null);
  const vehicleDataRef = useRef(null);
  const vehicleRentalCompanyDataRef = useRef(null);

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <FormHeader />
      <AccountHolder ref={accountHolderRef} />
      <VehicleRentalCompanyData ref={vehicleRentalCompanyDataRef} />
      <Location ref={locationRef} />
      <VehicleData ref={vehicleDataRef} />
      <ExtraComponents />
      <ActionButtons
        refs={[
          accountHolderRef,
          locationRef,
          vehicleDataRef,
          vehicleRentalCompanyDataRef,
        ]}
      />
    </Container>
  );
}
