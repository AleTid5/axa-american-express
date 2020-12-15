import React from "react";
import { Grid } from "@material-ui/core";
import { actions } from "../../../../mocks/home.mock";
import styles from "./styles";
import useScreenResizer from "../../../../customHooks/useScreenResizer";

const box = {
  width: 165,
  height: 130,
};
const gridRootStyle = (showAsBoxes) =>
  showAsBoxes
    ? {
        height: box.height / 2,
        top: -box.height / 2,
      }
    : {
        height: "auto",
        top: 0,
      };

export default function HomeActions() {
  const [{ width }] = useScreenResizer();
  const classes = styles();
  const maxScreenWidth = box.width * 4 + 2; // Borders
  const showAsBoxes = width >= maxScreenWidth;
  const isMiddleAction = (key) => key !== 0 && key !== actions.length - 1;

  return (
    <div className={classes.gridRoot} style={gridRootStyle(showAsBoxes)}>
      <Grid container className={classes.root}>
        {actions.map(({ icon: Icon, title, backgroundColor, color }, key) => (
          <Grid
            key={key}
            item
            style={{
              borderRight:
                showAsBoxes && isMiddleAction(key) ? "1px solid #c5c5c5" : 0,
              borderBottom:
                !showAsBoxes && isMiddleAction(key) ? "1px solid #c5c5c5" : 0,
            }}
            {...(!showAsBoxes && { xs: 12 })}
          >
            <div
              style={{
                backgroundColor,
                color,
                width: showAsBoxes ? box.width : "100%",
              }}
              className={classes.box}
            >
              <div>
                <div>
                  <Icon className={classes.icon} />
                </div>
                <div className={classes.title}>{title}</div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
