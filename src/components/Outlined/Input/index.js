import React from "react";
import {
  OutlinedInput as MuiOutlinedInput,
  FormControl,
  Typography,
} from "@material-ui/core";
import styles from "./styles";

export default function OutlinedInput({ title, value, setValue }) {
  const classes = styles();
  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <FormControl fullWidth variant="outlined" className={classes.input}>
        <MuiOutlinedInput
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          classes={{
            input: classes.inputOutlined,
            notchedOutline: classes.notchedOutline,
            root: classes.inputRoot,
          }}
        />
      </FormControl>
    </>
  );
}
