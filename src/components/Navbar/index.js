import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import styles from "./styles";
import logo from "../../assets/images/logo.jpg";
import { Authorized, Unauthorized } from "./actions";

export default function navbar({ isAuthenticated = true, fullName }) {
  const classes = styles();

  return (
    <>
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
          {isAuthenticated ? (
            <Authorized fullName={fullName} />
          ) : (
            <Unauthorized />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
