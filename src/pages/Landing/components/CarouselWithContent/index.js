import React from "react";
import { Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselContent } from "../../../../mocks/landing.mock";
import styles from "./styles";
import "./styles.scss";

export default function ImageCarousel() {
  const classes = styles();
  return (
    <Carousel
      autoPlay={false}
      swipeable
      infiniteLoop
      useKeyboardArrows
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeScrollTolerance={5}
      className={classes.carouselBorderTop}
    >
      {carouselContent.map(({ image, content }, key) => (
        <div
          key={key}
          className={classes.carouselImage}
          style={{
            background: `url(${image}) center 40% no-repeat`,
            backgroundSize: "cover",
          }}
        >
          {content && (
            <div className={classes.content}>
              {content.title && (
                <div className={classes.title}>{content.title}</div>
              )}
              {content.subtitle && (
                <div className={classes.subtitle}>{content.subtitle}</div>
              )}
              {content.button && (
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                >
                  {content.button}
                </Button>
              )}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}
