import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../assets/styles/background";
import Footer from "../../components/Footer";
import ContentHeader from "../../components/ContentHeader";
import ProfileTabs from "./components/ProfileTabs";

export default function Profile() {
  const classes = styles();
  const fullName = "Felipe X";

  return (
    <div className={classes.gradient}>
      <Navbar fullName={fullName} withShortcuts />
      <ContentHeader
        title="Mi Perfil"
        subtitle="Edite la información de su cuenta y sus datos personales."
      />
      <ProfileTabs />
      <Footer />
    </div>
  );
}
