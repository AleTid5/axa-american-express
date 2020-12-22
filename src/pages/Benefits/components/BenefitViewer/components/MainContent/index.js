import React from "react";
import { Button, Link } from "@material-ui/core";
import styles from "./styles";

export default function Index({ content: { title, subtitle, actions } }) {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
      <div className={classes.actionsContainer}>
        {actions.map((value, key) => (
          <Link
            key={key}
            href="#"
            className={classes.actionLink}
            style={{ gridColumn: key + 1 }}
          >
            {value}
          </Link>
        ))}
      </div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
      >
        Conocé en detalle todas las coberturas de tu Tarjeta
      </Button>
    </div>
  );
}
