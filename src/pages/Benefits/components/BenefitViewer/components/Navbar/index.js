import React, { useState } from "react";
import {
  IconButton,
  Fade,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import styles from "../../styles";

export default function Navbar({ actions, selectedKey, handleClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = styles();

  const handleMenuClick = (event, key) => {
    handleClick(key);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      >
        <MoreVert />
      </IconButton>
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
    </div>
  );
}
