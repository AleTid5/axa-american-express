import iconTravelAssistance from "../assets/icons/ico-asistencia-en-viajes.png";
import iconAccidentInsurance from "../assets/icons/ico-seguro-de-accidente.png";
import iconProtectedPurchase from "../assets/icons/ico-compra-protegida.png";
import iconCarRentalInsurance from "../assets/icons/ico-seguro-de-alquiler-auto.png";
import iconExtendedWarranty from "../assets/icons/ico-garantia-extendida.png";

export const actions = [
  {
    icon: iconTravelAssistance,
    title: "Asistencia en viajes",
    content: {
      title:
        "La Asistencia en Viajes le brinda tranquilidad y seguridad en caso de eventos imprevistos relacionados con emergencias médicas. Donde sea que esté y en cada uno de sus viajes.",
      actions: ["Emitir un certificado", "Generar un reclamo"],
    },
  },
  {
    icon: iconAccidentInsurance,
    title: "Seguro de accidente en viajes",
    content: {
      title:
        "Brinda cobertura en caso de muerte accidental o desmembramiento mientras viaja en un transporte público autorizado (terrestre, aéreo o marítimo) siempre y cuando haya abonado el costo del mismo en su totalidad con su tarjeta American Express. Para ser elegible al beneficio, la tarifa del viaje tiene que ser pagada en su totalidad con su tarjeta American Express. Asegúrese de tener un Certificado de Seguro de Viaje válido durante el período de tu viaje.",
      subtitle: "Consulte los Términos y Condiciones.",
      actions: ["Emitir un certificado", "Generar un reclamo"],
    },
  },
  {
    icon: iconProtectedPurchase,
    title: "Compra Protegida",
    content: {
      title:
        "Una amplia variedad de productos que abone con su Tarjeta American Express estarán protegidos contra daño accidental entre otros a partir de la fecha de compra.",
      actions: ["Generar un reclamo"],
    },
  },
  {
    icon: iconCarRentalInsurance,
    title: "Seguro de alquiler de auto",
    content: {
      title:
        "Este beneficio le brinda cobertura en caso de daños físicos y robo al auto alquilado. Recuerde que para acceder al mismo la reserva y el importe total del alquiler del auto tiene que ser pagada a su tarjeta American Express. Este beneficio no incluye daños a terceros.",
      subtitle: "Consulte los Términos y Condiciones.",
      actions: ["Generar un reclamo"],
    },
  },
  {
    icon: iconExtendedWarranty,
    title: "Garantía Extendida",
    content: {
      title:
        "El seguro de Garantía Extendida duplica el periodo de cobertura de la garantía original hasta por un año para los artículos cubiertos pagado en su totalidad con su tarjeta American Express. Para ser elegible, recuérdese tener un Certificado de Seguro de Garantía Extendida válido para los artículos cubiertos.",
      subtitle: "Consulte los Términos y Condiciones.",
      actions: ["Generar un reclamo"],
    },
  },
];
