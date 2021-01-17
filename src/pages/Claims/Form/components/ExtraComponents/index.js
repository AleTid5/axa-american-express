import React, { forwardRef, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import { OutlinedInput } from "../../../../../components/Extended";
import DialogMessage from "../../../../../components/Extended/DialogMessage";
import MultipleSelect from "../../../../../components/Extended/MultipleSelect";
import { countries } from "../../../../../mocks/mainForm.mock";
import styles from "./styles";

export default forwardRef(function ExtraComponents(_props, ref) {
  const [multipleSelect, setMultipleSelect] = useState([]);
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography className={`${classes.title} ${classes.titleContainer}`}>
        Componentes Extra
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <DialogMessage
            title="Lorem ipsum"
            actionTitle="Descargar certificado"
            dialogContent="Do you wish to doenload your certificate?"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <MultipleSelect
            title="Lorem multiple ipsum"
            value={multipleSelect}
            setValue={setMultipleSelect}
            options={countries.map(({ name }) => name)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing1}>
        <Grid item xs={12} md={5}>
          <OutlinedInput title="Color" />
        </Grid>
        <Grid item xs={12} md={7}>
          <OutlinedInput title="Año" />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacing2}>
        <Grid item xs={12} md={6}>
          <OutlinedInput
            title="Fecha de alquiler"
            startIcon={<CalendarToday />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <OutlinedInput
            title="Fecha de regreso"
            startIcon={<CalendarToday />}
          />
        </Grid>
      </Grid>
    </div>
  );
});
