import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles";
import { CustomRadio } from "../../../../../components/Outlined";

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
      <Typography className={classes.paragraph1}>
        Lea atentamente la información y complete todos los campos para evitar
        posibles retrasos al analizar su caso.
      </Typography>
      <Typography className={classes.paragraph2}>
        Debe notificar su reclamo a la compañía dentro de los primeros cuarenta
        y cinco (45) días a partir del incidente y devolver toda la
        documentación requerida dentro de los primeros novento (90) días a
        partir del incidente.
      </Typography>
      <CustomRadio
        className={classes.radioMarginTop}
        value={isAccountHolder}
        setValue={setIsAccountHolder}
        options={[
          {
            label: "Titular de la cuenta",
            value: "is-account-holder",
          },
          {
            label: "No es el titular de la Cuenta",
            value: "is-not-account-holder",
          },
        ]}
      />
    </div>
  );
});
