import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import useScreenResizing from "screen-resizing";
import { appFeatures } from "../../../../mocks/business-landing.mock";
import styles from "./styles";

export default function LandingBody() {
  const { isTablet } = useScreenResizing();
  const classes = styles();
  const MainTitle = () => (
    <Typography
      variant="h4"
      align="center"
      color="primary"
      classes={{
        h4: isTablet ? classes.mobileTypographyH4 : classes.typographyH4,
      }}
    >
      Seguro de Viaje para Tarjetas American Express
      <br />
      Persona Jurídica Emisión Masiva
    </Typography>
  );
  return (
    <>
      {isTablet && <MainTitle />}
      <Container
        fixed
        maxWidth="md"
        className={classes.container}
        classes={{ maxWidthMd: classes.containerMaxWidthMd }}
      >
        {!isTablet && <MainTitle />}
        <Typography
          variant="h5"
          align="center"
          className={classes.mt30}
          classes={{ h5: classes.typographyH5 }}
        >
          En este portal podrá generar de forma automática los certificados de
          viaje de sus clientes de forma unificada, como también gestionar sus
          certificados en un solo lugar.
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
    </>
  );
}
