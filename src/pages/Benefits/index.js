import React from "react";
import { creditsCards } from "../../mocks/creditCards.mock";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import BenefitViewer from "./components/BenefitViewer";

export default function Home() {
  const fullName = "Felipe X";

  return (
    <>
      <Navbar fullName={fullName} withShortcuts />
      <CreditCardsCarousel creditCards={creditsCards} />
      <BenefitViewer />
      <Footer />
    </>
  );
}
