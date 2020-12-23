import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { appFeatures } from "../../../../mocks/landing.mock";
import styles from "./styles";
import useScreenResizer from "../../../../customHooks/useScreenResizer";

export default function LandingBody() {
  const [{ isTablet }] = useScreenResizer();
  const classes = styles();
  return (
    <Container
      fixed
      maxWidth="md"
      className={classes.container}
      classes={{ maxWidthMd: classes.containerMaxWidthMd }}
    >
      <Typography
        variant="h4"
        align="center"
        color="primary"
        classes={{ h4: classes.typographyH4 }}
      >
        Aprovecha las herramientas del Portal de Seguros y Asistencias para
        clientes American Express
      </Typography>
      <Typography
        variant="h5"
        align="center"
        className={classes.mt30}
        classes={{ h5: classes.typographyH5 }}
      >
        Ahorra tiempo, descubre todos tus beneficios, tramita tus certificados
        de viaje al momento y siéntete respaldado donde sea que tus viajes te
        lleven.
      </Typography>
      <Grid container justify="center" className={classes.mt20}>
        {appFeatures.map(({ icon, title, description, withButton }, key) => (
          <Grid
            key={key}
            item
            sm={4}
            style={{ textAlign: "center" }}
            className={classes.gridItem}
          >
            <div
              className={classes.icon}
              style={{
                background: `url(${icon}) center 100% no-repeat`,
                backgroundSize: "contain",
              }}
            />
            <Typography
              variant="h5"
              classes={{ h5: classes.typographyH5 }}
              className={classes.itemTitle}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              classes={{ subtitle1: classes.typographyST1 }}
              className={classes.itemSubtitle}
            >
              {description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Conocé más
      </Button>
    </Container>
  );
}
