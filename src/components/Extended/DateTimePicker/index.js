import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "../styles.scss";

export default function DateTimePicker({
  className,
  title,
  time = false,
  value,
  setValue,
}) {
  return (
    <div className={className}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {time ? (
          <TimePicker
            clearable
            ampm={false}
            label={title}
            value={value}
            onChange={setValue}
          />
        ) : (
          <DatePicker
            clearable
            label={title}
            value={value}
            onChange={setValue}
          />
        )}
      </MuiPickersUtilsProvider>
    </div>
  );
}
