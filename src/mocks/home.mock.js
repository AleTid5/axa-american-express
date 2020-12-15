import {
  Info,
  Redeem,
  CardMembership,
  QuestionAnswer,
} from "@material-ui/icons";
import ShutterStock from "../assets/images/shutterstock_315931403.jpg";

export const carouselContent = [
  {
    image: ShutterStock,
    content: {
      title: "Certificados de Viaje",
      subtitle:
        "Si querés generar un certificado de viaje, hacelo sin problemas, de forma 100% online aquí. Solo tomará unos minutos.",
      button: "Generá certificados",
    },
  },
];

export const actions = [
  {
    icon: Redeem,
    title: "Conocer mis beneficios",
    backgroundColor: "white",
    color: "#0b276d",
  },
  {
    icon: CardMembership,
    title: "Emitir certificados",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
  {
    icon: QuestionAnswer,
    title: "Generar un reclamo",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
  {
    icon: Info,
    title: "Estado de mi reclamo",
    backgroundColor: "#f2f2f2",
    color: "#007ad5",
  },
];
