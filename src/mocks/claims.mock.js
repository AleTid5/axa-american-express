import iconCar from "../assets/icons/ico-seguro-de-alquiler-auto.png";
import iconHeartHands from "../assets/icons/ico-heart-hands.png";
import iconCash from "../assets/icons/ico-cash.png";
import iconBag from "../assets/icons/ico-bag.png";

export const actions = [
  {
    title: "Asistencia Médica en viajes",
    icon: iconHeartHands,
  },
  {
    title: "Seguro de Alquiler de Auto",
    icon: iconCar,
  },
];

export const claims = [
  {
    icon: iconCash,
    title: "Garantía de Precio",
    code: "PRIPRO-ROLAC-SEQ1",
    dateData: "29/10/2019 - 10",
    message: "Cerrado por documentación pendiente",
    completed: true,
  },
  {
    icon: iconBag,
    title: "Pérdida de equipaje",
    code: "BALROL00041",
    dateData: "10/12/2020 - 1 - Incompleto",
    completed: false,
  },
];
