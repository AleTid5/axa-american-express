import React from "react";
import { creditsCards } from "../../mocks/creditCards.mock";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import BenefitViewer from "./components/BenefitViewer";
import withChat from "../../components/WithChat";
import Background from "../../components/Background";

export default function Benefits() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <CreditCardsCarousel creditCards={creditsCards} />
      <BenefitViewer />
      <FooterWithChat />
    </Background>
  );
}
