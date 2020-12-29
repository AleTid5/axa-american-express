import React from "react";
import { creditsCards } from "../../mocks/creditCards.mock";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import BenefitViewer from "./components/BenefitViewer";
import styles from "../../assets/styles/background";
import withChat from "../../components/WithChat";

export default function Benefits() {
  const classes = styles();
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <div className={classes.gradient}>
      <Navbar fullName={fullName} withShortcuts />
      <CreditCardsCarousel creditCards={creditsCards} />
      <BenefitViewer />
      <FooterWithChat />
    </div>
  );
}
