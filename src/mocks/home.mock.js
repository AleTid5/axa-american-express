import imageHome1 from "../assets/images/slider-home.png";
import imageHome2 from "../assets/images/slider-home1.png";
import iconGift from "../assets/icons/ico-beneficios-azul.png";
import iconCert from "../assets/icons/ico-certificados-celeste.png";
import iconClaim from "../assets/icons/ico-reclamo-celeste.png";
import iconInfo from "../assets/icons/ico-estado-celeste.png";

export const carouselContent = [
  {
    image: imageHome1,
    /*content: {
      title: "Certificados de Viaje",
      subtitle:
        "Si querés generar un certificado de viaje, hacelo sin problemas, de forma 100% online aquí. Solo tomará unos minutos.",
      button: "Generá certificados",
    },*/
  },
  {
    image: imageHome2,
  },
];

export const actions = [
  {
    icon: iconGift,
    title: "Conocer mis beneficios",
    backgroundColor: "white",
    color: "#0b276d",
  },
  {
    icon: iconCert,
    title: "Emitir certificados",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
  {
    icon: iconClaim,
    title: "Generar un reclamo",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
  {
    icon: iconInfo,
    title: "Estado de mi reclamo",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
];
