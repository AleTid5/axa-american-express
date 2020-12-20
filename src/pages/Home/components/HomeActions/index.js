import React from "react";
import { Grid } from "@material-ui/core";
import { actions } from "../../../../mocks/home.mock";
import styles from "./styles";
import useScreenResizer from "../../../../customHooks/useScreenResizer";

export default function HomeActions() {
  const [{ width }] = useScreenResizer();
  const classes = styles();
  const isMobile = width < 576;
  const isMiddleBox = (key) => key !== 0 && key !== actions.length - 1;

  return (
    <div className={classes.gridRoot}>
      <Grid container className={classes.root}>
        {actions.map(({ icon, title, backgroundColor, color }, key) => (
          <Grid
            key={key}
            item
            {...(isMobile && { xs: 12 })}
            className={classes.boxContainer}
          >
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
                  <img alt="" src={icon} className={classes.icon} />
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
