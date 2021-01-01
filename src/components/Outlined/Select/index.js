import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import styles from "./styles";

export default function OutlinedSelect({
  title,
  list,
  selectedValue,
  setSelectedValue,
}) {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <FormControl fullWidth variant="outlined" className={classes.select}>
        <Select
          variant="outlined"
          value={selectedValue}
          onChange={({ target: { value } }) => setSelectedValue(value)}
          classes={{
            select: classes.selectOutlined,
            outlined: classes.notchedOutline,
            root: classes.selectRoot,
          }}
        >
          {list.map(({ label, value }, key) => (
            <MenuItem key={key} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
