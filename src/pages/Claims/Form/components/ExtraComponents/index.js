import React, { forwardRef, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import useScreenResizing from "screen-resizing";
import DialogMessage from "../../../../../components/Extended/DialogMessage";
import MultipleSelect from "../../../../../components/Extended/MultipleSelect";
import OutlinedTextArea from "../../../../../components/Extended/OutlinedTextArea";
import DateTimePicker from "../../../../../components/Extended/DateTimePicker";
import DropzoneWithButton from "../../../../../components/Extended/DropzoneWithButton";
import { countries } from "../../../../../mocks/mainForm.mock";
import styles from "./styles";

export default forwardRef(function ExtraComponents(_props, ref) {
  const [multipleSelect, setMultipleSelect] = useState([]);
  const [dateTime, setDateTime] = useState(null);
  const { isUsingPC } = useScreenResizing();
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography className={`${classes.title} ${classes.titleContainer}`}>
        Componentes Extra
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DialogMessage
            title="Popup yes/no"
            actionTitle="Descargar certificado"
            dialogContent="Do you wish to download your certificate?"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DialogMessage
            title="Dialog Message"
            actionTitle="Popup OK"
            dialogTitle="Thank you!"
            dialogContent="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
            buttons={[{ label: "OK", variant: "contained" }]}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing1}>
        <Grid item xs={12} md={5}>
          <OutlinedTextArea title="Outlined Textarea 1" />
        </Grid>
        <Grid item xs={12} md={7}>
          <OutlinedTextArea
            title={isUsingPC && <span>&nbsp;</span>}
            placeholder="Outlined Textarea 2"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing2}>
        <Grid item xs={12} md={6}>
          <OutlinedTextArea
            title="Outlined Textarea 3"
            subtitle="With a subtitle"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <DateTimePicker
            title="Date picker"
            value={dateTime}
            setValue={setDateTime}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <DateTimePicker
            title="Time picker"
            value={dateTime}
            setValue={setDateTime}
            time
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing2}>
        <Grid item xs={12} md={4}>
          <MultipleSelect
            title="Multiple select"
            value={multipleSelect}
            setValue={setMultipleSelect}
            options={countries.map(({ name }) => name)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <DropzoneWithButton description="Travel itinerary and/or tickets showing the total amount paid" />
          <DropzoneWithButton description="Medical records showing the cause of the disease/accident, diagnosis and date of occurrence" />
        </Grid>
      </Grid>
    </div>
  );
});
