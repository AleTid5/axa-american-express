import imageLanding1 from "../assets/images/slider-landing-4.jpg";
import imageLanding2 from "../assets/images/slider-landing-5.jpg";
import IconLock from "../assets/icons/ico-candado.png";
import IconControl from "../assets/icons/ico-control.png";
import IconEfficiency from "../assets/icons/ico-eficiencia.png";

export const carouselContent = [
  {
    image: imageLanding1,
    mobileImage: imageLanding1,
    alt: "Una herramienta 100% online a su disposición",
  },
  {
    image: imageLanding2,
    mobileImage: imageLanding2,
    alt:
      "Cuando cargue las solicitudes, podrá generar hasta 50 certificados a la vez",
  },
];

export const appFeatures = [
  {
    icon: IconControl,
    title: "Control",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
  },
  {
    icon: IconEfficiency,
    title: "Eficiencia",
    description:
      "Genere hasta 50 certificados de viaje utilizando la plantilla preestablecida que incluye todos los campos de información necesarios para la emisión masiva de certificados.",
  },
  {
    icon: IconLock,
    title: "Seguridad",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
  },
];
