import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import styles from "./styles";

export default forwardRef(function AccountHolder(props, ref) {
  const [isAccountHolder, setIsAccountHolder] = useState("is-account-holder");
  const classes = styles();

  useImperativeHandle(ref, () => ({
    validate: () => console.log(isAccountHolder),
    getProps: () => ({
      isAccountHolder,
    }),
  }));

  return (
    <div className={classes.container}>
      <Typography>
        Lea atentamente la información y complete todos los campos para evitar
        posibles retrasos al analizar su caso.
      </Typography>
      <Typography>
        Debe notificar su reclamo a la compañía dentro de los primeros cuarenta
        y cinco (45) días a partir del incidente y devolver toda la
        documentación requerida dentro de los primeros novento (90) días a
        partir del incidente.
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={isAccountHolder}
        onChange={({ target: { value } }) => setIsAccountHolder(value)}
      >
        <FormControlLabel
          value="is-account-holder"
          control={<Radio />}
          label="Titular de la cuenta"
        />
        <FormControlLabel
          value="is-not-account-holder"
          control={<Radio />}
          label="No es el titular de la Cuenta"
        />
      </RadioGroup>
    </div>
  );
});
