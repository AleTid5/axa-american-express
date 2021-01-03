import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import styles from "./styles";
import "../styles.scss";

export default function OutlinedSelect({ title, list, value, setValue }) {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <FormControl fullWidth variant="outlined" className={classes.select}>
        <Select
          variant="outlined"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          classes={{
            select: classes.selectOutlined,
            outlined: classes.notchedOutline,
            root: classes.selectRoot,
            icon: classes.selectIcon,
          }}
          IconComponent={ExpandMore}
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
