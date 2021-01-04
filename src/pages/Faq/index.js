import React from "react";
import withChat from "../../components/WithChat";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import AccordionList from "./components/AccordionList";
import { FilterProvider } from "./components/FilterContext";
import FaqHeader from "./components/FaqHeader";

export default function Faq() {
  const fullName = "Felipe X";
  const FooterWithChat = withChat(Footer);

  return (
    <Background>
      <Navbar fullName={fullName} withShortcuts />
      <FilterProvider>
        <FaqHeader />
        <AccordionList />
      </FilterProvider>
      <FooterWithChat />
    </Background>
  );
}
