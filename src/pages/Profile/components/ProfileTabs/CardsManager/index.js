import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { creditsCards } from "../../../../../mocks/creditCards.mock";
import styles from "./styles";
import { DeleteOutline, Star, StarOutline } from "@material-ui/icons";

export default function CardsManager() {
  const [favouriteCard, setFavouriteCard] = useState(0);
  const cards = creditsCards
    .filter((v, k) => k !== 4)
    .map((card) => ({ ...card, name: card.name.slice(0, -1) }));
  const classes = styles();

  return (
    <Grid container className={classes.container}>
      {cards.map(({ image, name }, key) => (
        <Grid
          key={key}
          item
          xs={12}
          md={6}
          className={`${classes.cardContainer} ${
            key % 2 !== 0 && classes.cardPaddingLeft
          }`}
        >
          <Grid container>
            <Grid item xs={4}>
              <img alt={name} src={image} className={classes.image} />
            </Grid>
            <Grid item xs={8} className={classes.cardInfoContainer}>
              <Grid container>
                <Grid item xs={8}>
                  <Typography className={classes.title}>{name}</Typography>
                  <Typography className={classes.title}>
                    AMERICAN EXPRESS
                  </Typography>
                  <Typography className={classes.subtitle}>
                    Argentina
                  </Typography>
                  <Typography
                    className={`${classes.subtitle} ${classes.cardNumberPadding}`}
                  >
                    3764.180***
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.middleStartAlign}>
                  {key === favouriteCard ? (
                    <Star className={classes.icon} />
                  ) : (
                    <StarOutline
                      onClick={() => setFavouriteCard(key)}
                      className={classes.icon}
                    />
                  )}
                  <DeleteOutline className={classes.icon} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
