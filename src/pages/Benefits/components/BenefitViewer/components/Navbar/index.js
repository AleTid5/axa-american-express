import React, { useState } from "react";
import {
  IconButton,
  Fade,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from "@material-ui/core";
import { KeyboardArrowDown, MoreVert } from "@material-ui/icons";
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
    <Grid container className={classes.navbarContainer}>
      <Grid item>{children}</Grid>
      <Grid item>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        >
          <KeyboardArrowDown className={classes.textPrimary} />
        </IconButton>
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
            <ListItemIcon>
              <img alt="" src={icon} className={classes.iconImage} />
            </ListItemIcon>
            <Typography variant="inherit">{title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
}
