import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./styles";

export default function HomeHeader({ name }) {
  const classes = styles();
  return (
    <div className={classes.lightgreyBackground}>
      <Container className={classes.container}>
        <Typography variant="h4" color="primary" className={classes.title}>
          Hola {name},
        </Typography>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          ¿Con qué te podemos ayudar hoy?
        </Typography>
      </Container>
    </div>
  );
}
