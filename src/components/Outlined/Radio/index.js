import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "./styles.scss";

export default function CustomRadio({
  className,
  options = [],
  layoutHorizontally = false,
  title,
  value,
  setValue,
}) {
  const classes = styles();
  return (
    <div
      style={{ height: "100%" }}
      className={`outlined-custom-radio ${className}`}
    >
      {title && <Typography className={classes.title}>{title}</Typography>}
      <RadioGroup
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        row={layoutHorizontally}
        className={layoutHorizontally ? classes.horizontallyMarginTop : null}
      >
        {options.map(({ label, value }, key) => (
          <FormControlLabel
            key={key}
            control={
              <Radio
                color="primary"
                classes={{
                  root: !layoutHorizontally
                    ? classes.radioVerticalRoot
                    : key > 0
                    ? classes.radioMarginLeft
                    : null,
                }}
              />
            }
            label={label}
            value={value}
            classes={{ label: classes.title }}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
