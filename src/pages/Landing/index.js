import React from "react";
import Navbar from "../../components/Navbar";
import CarouselWithContent from "./components/CarouselWithContent";
import Footer from "../../components/Footer";
import LandingBody from "./components/LandingBody";

export default function Landing() {
  return (
    <>
      <Navbar />
      <CarouselWithContent />
      <LandingBody />
      <Footer />
    </>
  );
}
