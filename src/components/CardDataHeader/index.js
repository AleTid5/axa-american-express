import React from "react";
import styles from "./styles";
import { Container } from "@material-ui/core";

export default function CardDataHeader({ title, subtitle, cardNumber }) {
  const classes = styles();
  return (
    <Container fixed className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
      <div className={classes.subtitle}>{cardNumber}</div>
    </Container>
  );
}
