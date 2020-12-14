import React from "react";
import { carouselContent } from "../../mocks/landing.mock";
import CarouselWithContent from "../../components/CarouselWithContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LandingBody from "./components/LandingBody";

export default function Landing() {
  return (
    <>
      <Navbar isAuthenticated={false} />
      <CarouselWithContent carouselContent={carouselContent} />
      <LandingBody />
      <Footer />
    </>
  );
}
