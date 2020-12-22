import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  KeyboardArrowDown,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@material-ui/icons";
import userIcon from "../../assets/icons/ico-user.png";
import { actions } from "../../mocks/navbar.mock";
import styles from "./styles";

export const Unauthorized = () => {
  const classes = styles();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={`${classes.button} ${classes.textPrimaryDark}`}
      >
        Registrarme
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        component={Link}
        to="/home"
      >
        Iniciar sesión
      </Button>
    </>
  );
};

export const Authorized = ({ fullName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = styles();
  const isMenuOpen = Boolean(anchorEl);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
      classes={{ list: classes.menuList, paper: classes.menuPaper }}
    >
      {actions.map(({ name, path }, key) => (
        <div key={key}>
          {key !== 0 && <Divider />}
          <MenuItem className={classes.menuItem}>
            <NavLink
              to={path}
              exact
              activeClassName={classes.textPrimaryBoldDark}
              className={classes.displayContents}
            >
              <span className={classes.menuName}>{name}</span>
              <div className={classes.horizontalDivider} />
              <KeyboardArrowRight className={classes.menuRightArrowIcon} />
            </NavLink>
          </MenuItem>
        </div>
      ))}
    </Menu>
  );

  return (
    <>
      <Box display="flex">
        <Box>
          <img alt="" src={userIcon} className={classes.userIcon} />
        </Box>
        <Box>
          <div className={classes.userName}>{fullName}</div>
        </Box>
        <Box className={classes.displayFlex}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            color="primary"
            onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
            className={classes.menuIcon}
          >
            {anchorEl ? (
              <KeyboardArrowUp className={classes.arrowIcon} />
            ) : (
              <KeyboardArrowDown className={classes.arrowIcon} />
            )}
          </IconButton>
        </Box>
      </Box>
      {renderMenu}
    </>
  );
};
