import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import styles from "./styles";
import "./styles.scss";

export default function CustomCheckbox({ className, value, setValue }) {
  const classes = styles();

  return (
    <div className={`custom-checkbox ${className}`}>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={({ target: { checked } }) => setValue(checked)}
            name="custom-checkbox"
            color="primary"
          />
        }
        label="Acepto términos y condiciones"
        classes={{ label: classes.title }}
      />
    </div>
  );
}
