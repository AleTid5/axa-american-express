import React from "react";
import { Divider } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { isIE } from "react-device-detect";
import styles from "../../styles";

export default function Sidebar({
  icon,
  title,
  index,
  selectedKey,
  handleClick,
}) {
  const classes = styles();
  return (
    <>
      {index !== 0 && <Divider style={{ backgroundColor: "#606060" }} />}
      <div
        className={isIE ? classes.actionContainerIE11 : classes.actionContainer}
        onClick={() => handleClick(index)}
      >
        <div className={classes.icon}>
          <img alt={title} src={icon} className={classes.iconImage} />
        </div>
        <div
          className={classes.title}
          style={{
            fontWeight: index === selectedKey ? 700 : 200,
          }}
        >
          {title}
        </div>
        <div className={classes.rightArrowContainer}>
          <KeyboardArrowRight className={classes.rightArrowIcon} />
        </div>
      </div>
    </>
  );
}
