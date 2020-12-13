import React from "react";
import { Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

export default function ImageCarousel({ content }) {
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
      {content.map(({ image, content }, key) => {
        console.log(content);
        return (
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
        );
      })}
    </Carousel>
  );
}
