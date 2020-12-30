import React from "react";
import styles from "./styles";
import { Container, Divider, Grid, Typography } from "@material-ui/core";

export default function ContactBody() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.contactContainer}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.borderCard} ${classes.paddingCard}`}
          >
            <Typography className={classes.title}>
              Si se encuentra en Estados Unidos,
            </Typography>
            <Typography className={classes.title}>
              Canadá, Puerto Rico y Las Islas Vírgenes<sup>(1)</sup>
            </Typography>
            <Typography className={classes.number}>1 (888) 558-2701</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.paddingCard}>
            <Typography className={classes.title}>
              Si se encuentra el resto del mundo
            </Typography>
            <Typography className={classes.title}>
              (a través del operador internacional)<sup>(1,2)</sup>
            </Typography>
            <Typography className={classes.number}>
              +1 (312) 356-5951
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.contactDivider} />
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.borderCard} ${classes.paddingCard}`}
          >
            <Typography className={classes.title}>
              Si reside en Brasil necesita ayuda local
            </Typography>
            <Typography className={classes.title}>
              -Tarjetas Personales.
            </Typography>
            <Typography className={classes.number}>0-800-042-0393</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.paddingCard}>
            <Typography className={classes.title}>
              Si reside en Brasil necesita ayuda local
            </Typography>
            <Typography className={classes.title}>
              -Personas Jurídicas-
            </Typography>
            <Typography className={classes.number}>0-800-761-2424</Typography>
          </Grid>
        </Grid>
      </div>
      <Typography className={`${classes.caption} ${classes.captionMarginTop}`}>
        1. Para llamadas realizadas desde teléfonos celulares, los cargos de
        Roaming serán responsabilidad del cliente.
      </Typography>
      <Typography className={classes.caption}>
        2. Llamadas por cobrar vía operadora internacional.
      </Typography>
      <Divider className={classes.cardDivider} />
      <Typography className={classes.title}>
        Tarjetas emitidas por American Express Argentina
      </Typography>
      <Typography className={`${classes.number} ${classes.numberMarginTop}`}>
        0810-888-7348
      </Typography>
      <Typography className={classes.title}>
        los días hábiles de 9 a 20 horas o comuníquese durante las 24 horas
      </Typography>
      <Typography className={classes.title}>
        al número que figura en el dorso de la Tarjeta.
      </Typography>
    </div>
  );
}
