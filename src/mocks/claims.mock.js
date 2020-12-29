import iconCar from "../assets/icons/ico-seguro-de-alquiler-auto.png";
import iconCert from "../assets/icons/ico-certificados-celeste.png";
import iconExtendedWarranty from "../assets/icons/ico-garantia-extendida.png";
import iconTravelAssistance from "../assets/icons/ico-asistencia-en-viajes.png";

export const actions = [
  {
    title: "Asistencia Médica en viajes",
    icon: iconCert,
  },
  {
    title: "Seguro de Alquiler de Auto",
    icon: iconCar,
  },
];

export const claims = [
  {
    icon: iconExtendedWarranty,
    title: "Garantía de Precio",
    code: "PRIPRO-ROLAC-SEQ1",
    dateData: "29/10/2019 - 10",
    message: "Cerrado por documentación pendiente",
    completed: true,
  },
  {
    icon: iconTravelAssistance,
    title: "Pérdida de equipaje",
    code: "BALROL00041",
    dateData: "10/12/2020 - 1 - Incompleto",
    completed: false,
  },
];
