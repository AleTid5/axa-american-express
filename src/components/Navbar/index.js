import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import logo from "../../assets/images/logo.jpg";
import { actions } from "../../mocks/home.mock";
import styles from "./styles";
import { Authorized, Unauthorized } from "./actions";

export default function Navbar({
  fullName,
  isAuthenticated = true,
  withShortcuts = false,
  showActions = true,
  shortcuts = actions,
}) {
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = styles();

  const handleLanding = () => {
    if (pathname === "/" || pathname.includes("/axa-american-express")) {
      history.push("/business-landing");
    } else {
      history.push("/");
    }
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar
        className={
          withShortcuts
            ? showActions
              ? classes.toolbarWithShortcuts
              : classes.toolbarWithShortcutsWithoutNameBox
            : classes.toolbar
        }
      >
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleLanding}
        >
          <img src={logo} className={classes.logo} alt="Main logo" />
        </IconButton>
        {withShortcuts && (
          <Grid
            container
            alignItems="center"
            className={classes.shortcutsContainer}
          >
            {shortcuts.map(({ title, path }, key) => (
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
          {showActions &&
            (isAuthenticated ? (
              <Authorized fullName={fullName} />
            ) : (
              <Unauthorized />
            ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
