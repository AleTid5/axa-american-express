import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import withChat from "../../components/WithChat";
import Background from "../../components/Background";
import CarouselWithContent from "../../components/CarouselWithContent";
import { carouselContent } from "../../mocks/mass-issuance-of-certs.mock";
import { shortcuts } from "../../mocks/navbar.mock";
import styles from "./styles";
import MassIssuanceUploader from "./components/MassIssuanceUploader";
import FilesFinder from "./components/FilesFinder";

export default function MassIssuanceCerts() {
  const classes = styles();
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar showActions={false} withShortcuts shortcuts={shortcuts} />
      <CarouselWithContent
        carouselContent={carouselContent}
        withBorder={false}
        className={classes.carouselBorder}
      />
      <ContentHeader
        title="Emisión masiva de Certificados"
        withPadding={false}
      />
      <MassIssuanceUploader />
      <FilesFinder />
      <FooterWithChat />
    </Background>
  );
}
