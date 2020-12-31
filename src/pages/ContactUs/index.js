import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import withChat from "../../components/WithChat";
import ContactInformation from "./components/ContactInformation";
import Background from "../../components/Background";

export default function ContactUs() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader title="Contactanos" />
      <ContactInformation />
      <FooterWithChat />
    </Background>
  );
}
