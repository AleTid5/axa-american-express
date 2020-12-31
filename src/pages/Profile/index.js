import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import ProfileTabs from "./components/ProfileTabs";
import CardForm from "./components/CardForm";
import CertsViewer from "./components/CertsViewer";
import withChat from "../../components/WithChat";
import Background from "../../components/Background";

export default function Profile() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader
        title="Mi Perfil"
        subtitle="Edite la información de su cuenta y sus datos personales."
      />
      <ProfileTabs />
      <CardForm />
      <CertsViewer />
      <FooterWithChat />
    </Background>
  );
}
