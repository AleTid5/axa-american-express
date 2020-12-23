import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Container, Typography } from "@material-ui/core";
import styles from "./styles";
import CreditCard from "./CreditCard";

export default function CreditCardsCarousel({
  creditCards,
  canSelectCard = true,
  cardSelected = 0,
}) {
  const [selectedCard, setSelectedCard] = useState(cardSelected);
  const classes = styles();

  return (
    <Container fixed className={classes.container}>
      <Typography
        variant="h6"
        classes={{ h6: classes.cardTitle }}
        style={{ textAlign: "center" }}
      >
        Tus tarjetas American Express
      </Typography>
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
