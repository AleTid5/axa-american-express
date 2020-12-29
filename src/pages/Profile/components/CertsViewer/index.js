import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import iconCert from "../../../../assets/icons/ico-certificados-celeste.png";
import IconCard from "../../../../components/IconCard";
import styles from "./styles";
import { Note, Publish } from "@material-ui/icons";

export default function CertsViewer() {
  const classes = styles();

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <IconCard
        icon={iconCert}
        xs={12}
        md={6}
        lg={4}
        className={classes.iconCard}
      >
        <Grid container>
          <Grid item xs={9}>
            <Typography className={classes.title}>
              Asistencia Médica en viajes
            </Typography>
            <Typography className={classes.subtitle}>
              ID de reserva: XXXXX
            </Typography>
            <Typography className={classes.subtitle}>
              ID de voucher: XXXXX
            </Typography>
            <Typography className={classes.subtitle}>
              Mi cobertura (USD até 0 USD)
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.iconsContainer}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} className={classes.iconContainer}>
                <Publish className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.iconContainer}>
                <Note className={classes.icon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </IconCard>
    </Container>
  );
}
