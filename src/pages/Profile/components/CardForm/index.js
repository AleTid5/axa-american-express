import React, { useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import styles from "./styles";
import OutlinedInput from "../../../../components/Extended/OutlinedInput";

export default function CardForm() {
  const [value, setValue] = useState("");
  const classes = styles();

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <Typography className={classes.title}>
        Ingrese los primeros 10 dígitos del número de su tarjeta American
        Express
      </Typography>
      <OutlinedInput
        title="Identificación de tarjeta"
        value={value}
        setValue={setValue}
        className={classes.mt10}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
      >
        Enviar
      </Button>
    </Container>
  );
}
