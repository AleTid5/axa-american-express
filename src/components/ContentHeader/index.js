import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./styles";

export default function ContentHeader({ title, subtitle, withPadding = true }) {
  const classes = styles();

  return (
    <Container
      fixed
      className={
        withPadding ? classes.container : classes.containerWithoutPadding
      }
    >
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Container>
  );
}
