import React from "react";
import Navbar from "../../components/Navbar";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import { creditsCards } from "../../mocks/creditCards.mock";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import ClaimManager from "./components/ClaimManager";
import withChat from "../../components/WithChat";
import Background from "../../components/Background";

export default function Certs() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader
        title="Reclamos"
        subtitle="Para crear un nuevo reclamo, seleccione una tarjeta de crédito y los beneficios del panel a continuación."
      />
      <CreditCardsCarousel creditCards={creditsCards} withTitle={false} />
      <ClaimManager />
      <FooterWithChat />
    </Background>
  );
}
