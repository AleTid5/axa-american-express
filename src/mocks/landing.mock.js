import imageLanding1 from "../assets/images/slider-landing-1.jpg";
import imageLanding2 from "../assets/images/slider-landing-2.jpg";
import imageLanding3 from "../assets/images/slider-landing-3.jpg";
import mobileImageLanding1 from "../assets/images/slider-landing-mobile-1.jpg";
import mobileImageLanding2 from "../assets/images/slider-landing-mobile-2.jpg";
import mobileImageLanding3 from "../assets/images/slider-landing-mobile-3.jpg";
import IconGift from "../assets/icons/ico-beneficios-azul.png";
import IconCert from "../assets/icons/ico-certificados-azul.png";
import IconClaim from "../assets/icons/ico-reclamo-azul.png";

export const carouselContent = [
  {
    image: imageLanding1,
    mobileImage: mobileImageLanding1,
    alt: "Te ayudamos a gestionar tus certificados de viaje y reclamos",
  },
  {
    image: imageLanding2,
    mobileImage: mobileImageLanding2,
    alt: "Genera tu certificado de viaje y disfruta sin preocupaciones",
  },
  {
    image: imageLanding3,
    mobileImage: mobileImageLanding3,
    alt: "Viajá con todos los beneficios",
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
