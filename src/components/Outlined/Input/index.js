import React from "react";
import {
  OutlinedInput as MuiOutlinedInput,
  FormControl,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "../styles.scss";

export default function OutlinedInput({
  className,
  title,
  type = "text",
  value,
  setValue,
  startIcon = null,
}) {
  const classes = styles();
  return (
    <div className={className}>
      <Typography className={classes.title}>{title}</Typography>
      <FormControl fullWidth variant="outlined" className={classes.input}>
        <MuiOutlinedInput
          type={type}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          classes={{
            input: classes.inputOutlined,
            notchedOutline: classes.notchedOutline,
            root: classes.inputRoot,
          }}
          startAdornment={startIcon}
        />
      </FormControl>
    </div>
  );
}
