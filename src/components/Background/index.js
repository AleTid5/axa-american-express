import React from "react";
import styles from "./styles";

export default function Background({ children, gradient = true }) {
  const classes = styles();
  return (
    <div className={gradient ? classes.gradient : classes.solid}>
      {children}
    </div>
  );
}
