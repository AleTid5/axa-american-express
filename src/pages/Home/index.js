import React from "react";
import { carouselContent } from "../../mocks/home.mock";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HomeHeader from "./components/HomeHeader";
import CarouselWithContent from "../../components/CarouselWithContent";

export default function Home() {
  const fullName = "Felipe X";
  const [name] = fullName.split(" ");

  return (
    <>
      <Navbar fullName={fullName} />
      <HomeHeader name={name} />
      <CarouselWithContent
        align="left"
        color="white"
        withBorder={false}
        carouselContent={carouselContent}
      />
      <Footer />
    </>
  );
}
