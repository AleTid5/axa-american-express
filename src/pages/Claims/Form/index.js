import React from "react";
import Navbar from "../../../components/Navbar";
import withChat from "../../../components/WithChat";
import Footer from "../../../components/Footer";
import Background from "../../../components/Background";
import MainForm from "./components/MainForm";

export default function ClaimForm() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <MainForm />
      <FooterWithChat />
    </Background>
  );
}
