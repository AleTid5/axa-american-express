import React from "react";
import "../../assets/styles/scss/index.scss";
import { carouselContent } from "../../mocks/home.mock";
import { creditsCards } from "../../mocks/creditCards.mock";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HomeHeader from "./components/HomeHeader";
import CarouselWithContent from "../../components/CarouselWithContent";
import HomeActions from "./components/HomeActions";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import styles from "../../assets/styles/background";

export default function Home({ background }) {
  const classes = styles();
  const fullName = "Felipe X";
  const [name] = fullName.split(" ");

  return (
    <div className={classes[background]}>
      <Navbar fullName={fullName} />
      <HomeHeader name={name} />
      <CarouselWithContent
        align="left"
        color="white"
        withBorder={false}
        carouselContent={carouselContent}
      />
      <HomeActions />
      <CreditCardsCarousel
        creditCards={creditsCards}
        canSelectCard={false}
        cardSelected={null}
      />
      <Footer />
    </div>
  );
}
