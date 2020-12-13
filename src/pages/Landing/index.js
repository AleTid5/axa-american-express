import React from "react";
import Navbar from "../../components/Navbar";
import CarouselWithContent from "../../components/CarouselWithContent";
import AMEX01 from "../../assets/images/AMEX-landing-1.jpg";

export default function Landing() {
  const content = [
    {
      image: AMEX01,
      content: {
        title: "¿Estás por irte de viaje?",
        subtitle:
          "Genera tu certificado de viaje y disfruta sin preocupaciones",
        button: "Generá certificados",
      },
    },
    {
      image: AMEX01,
      content: {
        title: "",
        subtitle: "",
        button: "",
      },
    },
  ];
  return (
    <>
      <Navbar />
      <CarouselWithContent content={content} />
    </>
  );
}
