import AMEX01 from "../assets/images/banner-home.jpg";
import IconGift from "../assets/icons/ico-beneficios-azul.png";
import IconCert from "../assets/icons/ico-certificados-azul.png";
import IconClaim from "../assets/icons/ico-reclamo-azul.png";

export const carouselContent = [
  {
    image: AMEX01,
    content: {
      title: "¿Estás por irte de viaje?",
      subtitle: "Genera tu certificado de viaje y disfruta sin preocupaciones",
      button: "Generá certificados",
    },
  },
  {
    image: AMEX01,
  },
];

export const appFeatures = [
  {
    icon: IconGift,
    title: "Beneficios",
    description:
      "Al ser socio de American Express, a la hora de viajar cuentas con múltiples beneficios pensados para tu tranquilidad.",
  },
  {
    icon: IconCert,
    title: "Certificados",
    description:
      "En tan solo unos minutos podrás generar tu certificado de viaje, de forma 100% online, desde cualquier dispositivo antes o después de viajar.",
  },
  {
    icon: IconClaim,
    title: "Reclamos",
    description:
      "Ante cualquier inconveniente, tendrás la posibilidad de gestionar tus reclamos de forma online y hacer seguimiento a cualquier hora.",
  },
];
