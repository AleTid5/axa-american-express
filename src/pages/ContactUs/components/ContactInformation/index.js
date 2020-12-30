import React from "react";
import { Container } from "@material-ui/core";
import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";

export default function ContactInformation() {
  return (
    <Container maxWidth="xl" fixed>
      <ContactHeader />
      <ContactBody />
    </Container>
  );
}
