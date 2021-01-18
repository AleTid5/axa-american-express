import React from "react";
import {
  FormControl,
  OutlinedInput as MuiOutlinedInput,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "../styles.scss";

export default function OutlinedTextArea({
  className,
  title,
  subtitle,
  type = "text",
  value,
  setValue,
  lightBorder = true,
  placeholder = "",
}) {
  const classes = styles();

  return (
    <div className={className}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {subtitle && (
        <Typography className={classes.subtitle}>{subtitle}</Typography>
      )}
      <FormControl fullWidth variant="outlined" className={classes.input}>
        <MuiOutlinedInput
          type={type}
          multiline
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          classes={{
            root: lightBorder ? classes.inputLightRoot : classes.inputDarkRoot,
            input: classes.inputOutlined,
            notchedOutline: lightBorder
              ? classes.importantNotchedOutline
              : classes.notchedOutline,
          }}
        />
      </FormControl>
    </div>
  );
}
