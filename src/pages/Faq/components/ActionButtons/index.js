import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import styles from "./styles";
import useScreenResizer from "../../../../customHooks/useScreenResizer";

export default function ActionButtons() {
  const [{ isMobile }] = useScreenResizer();
  const classes = styles();

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={3} xl={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.primaryButton}
          >
            Paso a paso PDF
          </Button>
        </Grid>
        {!isMobile && <Grid item sm={4} md={6} xl={8} />}
        <Grid item xs={6} sm={4} md={3} xl={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.secondaryButton}
            onClick={scrollToTop}
          >
            Ir arriba
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
