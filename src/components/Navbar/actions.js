import React from "react";
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
  AccountCircleOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@material-ui/icons";
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
        className={`${classes.textPrimaryDark} ${classes.smallText} ${classes.mr10}`}
      >
        Registrarme
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.smallText}
        component={Link}
        to="/home"
      >
        Iniciar sesión
      </Button>
    </>
  );
};

export const Authorized = ({ fullName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
          <MenuItem>
            <NavLink
              to={path}
              exact
              activeClassName={classes.textPrimaryBoldDark}
            >
              <span>{name}</span>
              <div className={classes.horizontalDivider} />
              <KeyboardArrowRight />
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
          <AccountCircleOutlined color="primary" className={classes.userIcon} />
        </Box>
        <Box>
          <div className={classes.userName}>{fullName}</div>
        </Box>
        <Box>
          <IconButton
            edge="end"
            aria-label="account of current user"
            color="primary"
            onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
          >
            {anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </Box>
      </Box>
      {renderMenu}
    </>
  );
};
