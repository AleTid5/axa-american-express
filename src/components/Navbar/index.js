import React from "react";
import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import logo from "../../assets/images/logo.jpg";
import { actions } from "../../mocks/home.mock";
import styles from "./styles";
import { Authorized, Unauthorized } from "./actions";
import { NavLink } from "react-router-dom";

export default function Navbar({
  isAuthenticated = true,
  fullName,
  withShortcuts = false,
}) {
  const classes = styles();

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          className={
            withShortcuts ? classes.toolbarWithShortcuts : classes.toolbar
          }
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} className={classes.logo} alt="Main logo" />
          </IconButton>
          {withShortcuts && (
            <Grid
              container
              alignItems="center"
              className={classes.shortcutsContainer}
            >
              {actions.map(({ title, path }, key) => (
                <div
                  key={key}
                  className={classes.shortcutTitle}
                  style={{
                    borderRight:
                      key !== actions.length - 1 ? "1px solid #c5c6c5" : 0,
                  }}
                >
                  <NavLink
                    key={key}
                    to={path}
                    exact
                    activeClassName={classes.textPrimaryBoldDark}
                  >
                    <span>{title}</span>
                  </NavLink>
                </div>
              ))}
            </Grid>
          )}
          <div className={classes.rightContent}>
            {isAuthenticated ? (
              <Authorized fullName={fullName} withShortcuts={withShortcuts} />
            ) : (
              <Unauthorized />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
