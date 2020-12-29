import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "./styles.scss";

export default function CardForm() {
  const [value, setValue] = useState("");
  const classes = styles();

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <Typography className={classes.title}>
        Ingrese los primeros 10 dígitos del número de su tarjeta American
        Express
      </Typography>
      <Typography className={classes.subtitle}>
        Identificación de tarjeta
      </Typography>
      <FormControl fullWidth variant="outlined" className={classes.input}>
        <OutlinedInput
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          classes={{
            input: classes.inputOutlined,
            notchedOutline: classes.inputNotchedOutline,
            root: classes.inputRoot,
          }}
        />
      </FormControl>
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
