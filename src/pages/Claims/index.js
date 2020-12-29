import styles from "../../assets/styles/background";
import Navbar from "../../components/Navbar";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import { creditsCards } from "../../mocks/creditCards.mock";
import Footer from "../../components/Footer";
import React from "react";
import ContentHeader from "../../components/ContentHeader";
import ClaimManager from "./components/ClaimManager";
import withChat from "../../components/WithChat";

export default function Certs() {
  const classes = styles();
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <div className={classes.gradient}>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader
        title="Reclamos"
        subtitle="Para crear un nuevo reclamo, seleccione una tarjeta de crédito y los beneficios del panel a continuación."
      />
      <CreditCardsCarousel creditCards={creditsCards} withTitle={false} />
      <ClaimManager />
      <FooterWithChat />
    </div>
  );
}
