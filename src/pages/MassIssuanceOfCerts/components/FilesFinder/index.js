import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import { OutlinedInput } from "../../../../components/Extended";
import styles from "./styles";
import FilesTable from "../FilesTable";

export default function FilesFinder() {
  const [value, setValue] = useState("");
  const classes = styles();

  return (
    <Container fixed maxWidth="xl">
      <Typography variant="h2" className={classes.title}>
        Búsqueda de archivos
      </Typography>
      <Grid container spacing={2} className={classes.formContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <OutlinedInput title="Archivo" value={value} setValue={setValue} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OutlinedInput title="Lote" value={value} setValue={setValue} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OutlinedInput
            title="Fecha inicial"
            value={value}
            setValue={setValue}
            startIcon={<CalendarToday />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OutlinedInput
            title="Fecha final"
            value={value}
            setValue={setValue}
            startIcon={<CalendarToday />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <OutlinedInput title="Nombre" value={value} setValue={setValue} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <OutlinedInput title="CPF" value={value} setValue={setValue} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OutlinedInput title="Pasaporte" value={value} setValue={setValue} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.findButton}
      >
        Buscar
      </Button>
      <FilesTable
        className={classes.filesTableContainer}
        backgroundWhite={false}
        title="Resultado de la búsqueda"
        files={[{ name: "Massive Upload Test correct file Mes 2020.xlsx" }]}
      />
    </Container>
  );
}
