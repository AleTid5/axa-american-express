import React from "react";
import { carouselContent } from "../../mocks/landing.mock";
import CarouselWithContent from "../../components/CarouselWithContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LandingBody from "./components/LandingBody";
import Background from "../../components/Background";

export default function Landing() {
  return (
    <Background gradient={false}>
      <Navbar isAuthenticated={false} />
      <CarouselWithContent carouselContent={carouselContent} />
      <LandingBody />
      <Footer />
    </Background>
  );
}
