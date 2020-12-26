import React from "react";
import CardDataHeader from "../../../../components/CardDataHeader";
import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import { actions, certs } from "../../../../mocks/certs.mock";
import IconCard from "../../../../components/IconCard";
import { Search, VerticalAlignBottom } from "@material-ui/icons";

export default function CertManager() {
  const classes = styles();
  return (
    <>
      <CardDataHeader
        title="The Platinum Card®"
        subtitle="Interbank | Perú"
        cardNumber="3777.526***"
      />
      <Container fixed className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Mis Certificados
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Añadir nuevo certificado
        </Button>
        <Grid container spacing={3} className={classes.mt30}>
          {certs.map(({ title, subtitle, icon }, key) => (
            <IconCard key={key} icon={icon}>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    {title}
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.cardSubtitle}
                  >
                    {subtitle}
                  </Typography>
                </Grid>
                <Grid item xs={3} className={classes.iconsContainer}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} className={classes.iconContainer}>
                      <VerticalAlignBottom className={classes.icon} />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.iconContainer}>
                      <Search className={classes.icon} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </IconCard>
          ))}
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={3} className={classes.mt20}>
          {actions.map(({ icon, title }, key) => (
            <IconCard key={key} icon={icon}>
              <Typography variant="h6" className={classes.cardTitle}>
                {title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.cardButton}
              >
                Añadir nuevo certificado
              </Button>
            </IconCard>
          ))}
        </Grid>
      </Container>
    </>
  );
}
