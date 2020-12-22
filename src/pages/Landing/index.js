import React from "react";
import { carouselContent } from "../../mocks/landing.mock";
import CarouselWithContent from "../../components/CarouselWithContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LandingBody from "./components/LandingBody";
import styles from "../../assets/styles/background";

export default function Landing({ background }) {
  const classes = styles();
  return (
    <div className={classes[background]}>
      <Navbar isAuthenticated={false} />
      <CarouselWithContent carouselContent={carouselContent} />
      <LandingBody />
      <Footer />
    </div>
  );
}
