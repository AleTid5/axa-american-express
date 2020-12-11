import React from "react";
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import styles from "./styles";
import logo from "../../assets/images/logo.png";

export default function navbar({ isAuthenticated }) {
  const classes = styles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <img src={logo} className={classes.logo} alt="Main logo" />
        </IconButton>
        <div className={classes.horizontalDivider} />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={`${classes.deepBlueText} ${classes.smallText} ${classes.marginRight10}`}
        >
          Registrarme
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.smallText}
        >
          Iniciar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
}
