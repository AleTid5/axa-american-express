import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles";
import "./styles.scss";
import useScreenResizer from "../../customHooks/useScreenResizer";

export default function CarouselWithContent({
  withBorder = true,
  carouselContent = [],
}) {
  const [{ isMobile }] = useScreenResizer();
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
      className={withBorder ? classes.carouselBorderTop : null}
    >
      {carouselContent.map(({ alt, image, mobileImage }, key) => (
        <img key={key} alt={alt} src={isMobile ? mobileImage : image} />
      ))}
    </Carousel>
  );
}