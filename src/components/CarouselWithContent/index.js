import React from "react";
import { Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles";
import "./styles.scss";

export default function CarouselWithContent({
  align = "right",
  color = "primary",
  withBorder = true,
  carouselContent = [],
}) {
  const classes = styles();
  const className = (content) => classes[`${align}_${color}_${content}`];

  const ImageWithContent = ({ content, image }) => (
    <div
      className={classes.carouselImage}
      style={{
        background: `url(${image}) center 100% no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {content && (
        <div className={className("content")}>
          {content.title && (
            <div className={className("title")}>{content.title}</div>
          )}
          {content.subtitle && (
            <div className={className("subtitle")}>{content.subtitle}</div>
          )}
          {content.button && (
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={className("button")}
            >
              {content.button}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const LeftArrow = (clickHandler, hasPrev, label) => {};

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
      className={withBorder ? classes.carouselBorderTop : null}
    >
      {carouselContent.map(({ image, content }, key) =>
        content ? (
          <ImageWithContent key={key} image={image} content={content} />
        ) : (
          <img key={key} alt="" src={image} />
        )
      )}
    </Carousel>
  );
}
