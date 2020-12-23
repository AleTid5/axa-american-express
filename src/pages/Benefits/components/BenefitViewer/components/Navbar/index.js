import React, { useState } from "react";
import {
  Fade,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import styles from "./styles";

export default function Navbar({
  actions,
  selectedKey,
  handleClick,
  children,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = styles();

  const handleMenuClick = (event, key) => {
    handleClick(key);
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
        className={classes.navbarContainer}
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      >
        <Grid item>{children}</Grid>
        <Grid item className={classes.downArrowContainer}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
          >
            <KeyboardArrowDown className={classes.textPrimaryDark} />
          </IconButton>
        </Grid>
      </Grid>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
      >
        {actions.map(({ icon, title }, key) => (
          <MenuItem
            key={key}
            selected={key === selectedKey}
            onClick={(event) => handleMenuClick(event, key)}
          >
            <ListItemIcon className={classes.iconContainer}>
              <img alt={title} src={icon} className={classes.iconImage} />
            </ListItemIcon>
            <Typography variant="inherit" className={classes.title}>
              {title}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
