import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./styles";

export default function ProgressBar(props) {
  const classes = styles();
  return (
    <LinearProgress
      {...props}
      classes={{
        root: classes.root,
        colorPrimary: classes.colorPrimary,
        bar: classes.bar,
      }}
    />
  );
}
