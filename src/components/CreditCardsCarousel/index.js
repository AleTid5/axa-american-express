import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Typography } from "@material-ui/core";
import { isIE } from "react-device-detect";
import CreditCard from "./CreditCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import styles from "./styles";

export default function CreditCardsCarousel({
  creditCards,
  canSelectCard = true,
  cardSelected = 0,
  withTitle = true,
}) {
  const [selectedCard, setSelectedCard] = useState(cardSelected);
  const classes = styles();

  if (isIE) {
    require("./ie11styles.scss");
  }

  return (
    <Container fixed className={classes.container}>
      {withTitle && (
        <Typography
          variant="h6"
          classes={{ h6: classes.cardTitle }}
          style={{ textAlign: "center" }}
        >
          Tus tarjetas American Express
        </Typography>
      )}
      <Slider
        className={classes.slider}
        infinite
        speed={500}
        slidesToShow={4}
        responsive={[
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {creditCards.map(({ image, name, number }, key) => (
          <CreditCard
            key={key}
            index={key}
            image={image}
            name={name}
            number={number}
            setSelectedCard={(key) => canSelectCard && setSelectedCard(key)}
            isCardSelected={key === selectedCard}
          />
        ))}
      </Slider>
    </Container>
  );
}
