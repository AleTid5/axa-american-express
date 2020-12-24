import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./styles";

export default function ContentHeader({ title, subtitle }) {
  const classes = styles();

  return (
    <Container fixed className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {subtitle}
      </Typography>
    </Container>
  );
}
