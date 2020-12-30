import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles";

export default function ContactHeader() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography>
        <span className={classes.text}>Envíanos un correo electrónico: </span>
        <a
          href="mailto:aexp.gns.claims@axa-assistance.us"
          target="_blank"
          className={classes.link}
        >
          aexp.gns.claims@axa-assistance.us
        </a>
        <span className={classes.text}>, completa el </span>
        <a href="#" className={classes.link}>
          formulario
        </a>
      </Typography>
      <Typography className={classes.text}>O llámenos a:</Typography>
    </div>
  );
}
