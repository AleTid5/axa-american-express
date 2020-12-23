import imageHome1 from "../assets/images/slider-home-1.jpg";
import imageHome2 from "../assets/images/slider-home-2.jpg";
import imageHome3 from "../assets/images/slider-home-3.jpg";
import mobileImageHome1 from "../assets/images/slider-home-mobile-1.jpg";
import mobileImageHome2 from "../assets/images/slider-home-mobile-2.jpg";
import mobileImageHome3 from "../assets/images/slider-home-mobile-3.jpg";
import iconGift from "../assets/icons/ico-beneficios-azul.png";
import iconCert from "../assets/icons/ico-certificados-celeste.png";
import iconClaim from "../assets/icons/ico-reclamo-celeste.png";
import iconInfo from "../assets/icons/ico-estado-celeste.png";

export const carouselContent = [
  {
    image: imageHome1,
    mobileImage: mobileImageHome1,
    alt:
      "Tu tarjeta American Express te acompaña en tus viajes en todo momento",
  },
  {
    image: imageHome2,
    mobileImage: mobileImageHome2,
    alt: "Estamos para ayudarte en todo momento",
  },
  {
    image: imageHome3,
    mobileImage: mobileImageHome3,
    alt: "Si querés generar un certificado de viajes, hacelo sin problemas",
  },
];

export const actions = [
  {
    icon: iconGift,
    title: "Conocer mis beneficios",
    backgroundColor: "white",
    color: "#0b276d",
    path: "/benefits",
  },
  {
    icon: iconCert,
    title: "Emitir certificados",
    backgroundColor: "#fafafa",
    color: "#007ad5",
    path: "/certs",
  },
  {
    icon: iconClaim,
    title: "Generar un reclamo",
    backgroundColor: "#fafafa",
    color: "#007ad5",
    path: "/claims",
  },
  {
    icon: iconInfo,
    title: "Estado de mi reclamo",
    backgroundColor: "#fafafa",
    color: "#007ad5",
    path: "/claims/status",
  },
];
