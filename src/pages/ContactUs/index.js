import React from "react";
import styles from "../../assets/styles/background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import withChat from "../../components/WithChat";
import ContactInformation from "./components/ContactInformation";

export default function ContactUs() {
  const classes = styles();
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <div className={classes.gradient}>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader title="Contactanos" />
      <ContactInformation />
      <FooterWithChat />
    </div>
  );
}
