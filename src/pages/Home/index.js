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
import withChat from "../../components/WithChat";
import Background from "../../components/Background";

export default function Home() {
  const fullName = "Felipe X";
  const [name] = fullName.split(" ");
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} />
      <HomeHeader name={name} />
      <CarouselWithContent
        withBorder={false}
        carouselContent={carouselContent}
      />
      <HomeActions />
      <CreditCardsCarousel
        creditCards={creditsCards}
        canSelectCard={false}
        cardSelected={null}
      />
      <FooterWithChat />
    </Background>
  );
}
