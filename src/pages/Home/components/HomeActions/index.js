import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useScreenResizing from "screen-resizing";
import { isIE } from "react-device-detect";
import { actions } from "../../../../mocks/home.mock";
import styles from "./styles";

export default function HomeActions() {
  const { isMobile } = useScreenResizing();
  const classes = styles();
  const isMiddleBox = (key) => key !== 0 && key !== actions.length - 1;

  return (
    <div className={classes.gridRoot}>
      <Grid container className={classes.root}>
        <div className={isIE ? classes.boxShadowIE11 : classes.boxShadow}>
          {actions.map(({ icon, title, backgroundColor, color, path }, key) => (
            <Grid
              key={key}
              item
              {...(isMobile && { xs: 12 })}
              className={isIE ? classes.boxContainerIE11 : classes.boxContainer}
            >
              <NavLink key={key} to={path} exact>
                <div
                  style={{
                    backgroundColor,
                    color,
                  }}
                  className={`${classes.box} ${
                    isMiddleBox(key) &&
                    (isMobile ? classes.borderBottom : classes.borderRight)
                  }`}
                >
                  <div>
                    <div>
                      <img alt={title} src={icon} className={classes.icon} />
                    </div>
                    <div
                      className={`${classes.title} ${
                        key ? classes.semiBoldText : classes.boldText
                      }`}
                    >
                      {title}
                    </div>
                  </div>
                </div>
              </NavLink>
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  );
}
