import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles";

export default function CreditCard({
  index,
  image,
  name,
  number,
  setSelectedCard,
  isCardSelected,
}) {
  const classes = styles();
  return (
    <div key={index} className={classes.creditCard}>
      <div>
        <img
          alt=""
          src={image}
          className={isCardSelected ? classes.selectedImage : classes.image}
          onClick={() => setSelectedCard(isCardSelected ? null : index)}
        />
      </div>
      <div className={classes.shadow} />
      <div>
        <Typography
          variant="subtitle2"
          className={isCardSelected ? classes.selectedTitle : classes.title}
        >
          {name}
        </Typography>
      </div>
      <div>
        <Typography
          variant="subtitle2"
          className={
            isCardSelected ? classes.selectedSubtitle : classes.subtitle
          }
        >
          {number}
        </Typography>
      </div>
    </div>
  );
}
