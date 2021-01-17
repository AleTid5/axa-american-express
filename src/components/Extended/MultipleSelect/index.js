import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "../styles.scss";

export default function MultipleSelect({
  className,
  title,
  value = [],
  setValue,
  options,
}) {
  const classes = styles();

  const handleChange = (name, checked) => {
    if (checked) {
      setValue([...value, name]);
    } else {
      setValue(value.filter((valueName) => valueName !== name));
    }
  };

  return (
    <div className={className}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <FormGroup>
          {options.map((option, key) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={value.includes(option)}
                  onChange={({ target: { name, checked } }) =>
                    handleChange(name, checked)
                  }
                  name={option}
                  color="primary"
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
