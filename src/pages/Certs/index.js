import styles from "../../assets/styles/background";
import Navbar from "../../components/Navbar";
import CreditCardsCarousel from "../../components/CreditCardsCarousel";
import { creditsCards } from "../../mocks/creditCards.mock";
import Footer from "../../components/Footer";
import React from "react";
import ContentHeader from "../../components/ContentHeader";
import CertManager from "./components/CertManager";

export default function Certs() {
  const classes = styles();
  const fullName = "Felipe X";

  return (
    <div className={classes.gradient}>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader
        title="Mis Certificados"
        subtitle="Para crear un nuevo certificado, seleccione la tarjeta de crédito y los beneficios del panel a continuación."
      />
      <CreditCardsCarousel creditCards={creditsCards} withTitle={false} />
      <CertManager />
      <Footer />
    </div>
  );
}
