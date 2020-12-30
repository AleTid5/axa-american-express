import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles";
import { Link } from "react-router-dom";

export default function ContactHeader() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography>
        <span className={classes.text}>Envíanos un correo electrónico: </span>
        <a
          href="mailto:aexp.gns.claims@axa-assistance.us"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          aexp.gns.claims@axa-assistance.us
        </a>
        <span className={classes.text}>, completa el </span>
        <Link to="#" className={classes.link}>
          formulario
        </Link>
      </Typography>
      <Typography className={classes.text}>O llámenos a:</Typography>
    </div>
  );
}
