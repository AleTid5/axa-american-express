import {
  FamilyMedicalCoverage,
  HowCanIAccessToThePortal,
  HowCanIRegisterToThePortal,
  HowLongInAdvanceShouldIRequestTheCert,
  HowToChangeAddress,
  HowToChangeCertWrongData,
  HowToChangeEmail,
  HowToChangePassword,
  HowToGenerateACert,
  HowToProtectDataInPortal,
  HowToRegisterAdditionalCards,
  HowToRemoveACard,
  HowToResetPassword,
  HowToStartAClaim,
  PortalSupportsMobile,
  ProblemsAccessingToThePortal,
  SchengenPeopleMedicalCoverage,
  ShouldCreateNewAccountOnNewCard,
  ShouldIssueMultipleCerts,
  ShouldPrintTheCert,
  ShowNewCardBenefits,
  WhatAreTheUsesOfBenefitsPortal,
  WhatIsTheBenefitsPortal,
  WhatIsTheSchengenTreaty,
  WhichAreTheContactPhoneNumbers,
  WhichIsTheCostOfTheBenefitsPortal,
  WrongDataLoaded,
} from "../pages/Faq/components/AccordionChildren";

export const faqs = [
  {
    title: "¿Qué es el Portal de Beneficios?",
    component: WhatIsTheBenefitsPortal,
  },
  {
    title: "¿Qué usos tiene el Portal de Beneficios?",
    component: WhatAreTheUsesOfBenefitsPortal,
  },
  {
    title: "¿Cuál es el costo del uso del Portal de Beneficios?",
    component: WhichIsTheCostOfTheBenefitsPortal,
  },
  {
    title: "¿Cómo puedo acceder al Portal de Beneficios?",
    component: HowCanIAccessToThePortal,
  },
  {
    title: "¿Cómo me registro en el Portal de Beneficios?",
    component: HowCanIRegisterToThePortal,
  },
  {
    title:
      "¿Cuáles son los números de contacto en caso de tener algún problema técnico o inconveniente con el acceso y/o mal funcionamiento del portal?",
    component: WhichAreTheContactPhoneNumbers,
  },
  {
    title: "¿Cómo modifico mi contraseña?",
    component: HowToChangePassword,
  },
  {
    title: "¿Qué debo hacer si olvido mi contraseña?",
    component: HowToResetPassword,
  },
  {
    title: "¿Cómo puedo cambiar el correo electrónico registrado en el Portal?",
    component: HowToChangeEmail,
  },
  {
    title:
      "¿Cómo puedo registrar tarjetas adicionales en el Portal de beneficios?",
    component: HowToRegisterAdditionalCards,
  },
  {
    title:
      "He cambiado el número de mi tarjeta. ¿Cómo conozco los beneficios que tiene?",
    component: ShowNewCardBenefits,
  },
  {
    title: "Tengo otra tarjeta, ¿tengo que crear una cuenta nueva?",
    component: ShouldCreateNewAccountOnNewCard,
  },
  {
    title:
      "Mis datos fueron mal registrados. ¿Qué debería hacer y cuánto tiempo se necesita para actualizar mis datos en el portal de beneficios?",
    component: WrongDataLoaded,
  },
  {
    title:
      "¿Cómo puedo modificar la dirección registrada en el Portal de Beneficios?",
    component: HowToChangeAddress,
  },
  {
    title: "¿Cómo elimino una tarjeta del portal?",
    component: HowToRemoveACard,
  },
  {
    title:
      "¿Cómo iniciar un reclamo a través del Portal De Beneficios?<sup>(1)</sup>",
    component: HowToStartAClaim,
  },
  {
    title:
      "¿Cómo puedo emitir mis certificados de viaje en el Portal de Beneficios?<sup>(1)</sup>",
    component: HowToGenerateACert,
  },
  {
    title:
      "Si tengo como destino de viaje más de un país, ¿tengo que emitir un certificado para cada destino *",
    component: ShouldIssueMultipleCerts,
  },
  {
    title: "¿Con cuánto tiempo de anticipación debo emitir los certificados? *",
    component: HowLongInAdvanceShouldIRequestTheCert,
  },
  {
    title:
      "El certificado fue emitido con datos incorrectos, ¿Se puede corregir? *",
    component: HowToChangeCertWrongData,
  },
  {
    title:
      "El certificado de beneficio de cobertura médica en viajes, ¿es válido para los países de la comunidad Schengen? *",
    component: SchengenPeopleMedicalCoverage,
  },
  {
    title: "¿Qué es el Tratado Schengen?",
    component: WhatIsTheSchengenTreaty,
  },
  {
    title: "¿Tengo que llevar impreso mi certificado para un viaje?",
    component: ShouldPrintTheCert,
  },
  {
    title:
      "¿Puedo agregar a mi esposa e hijos al Certificado de cobertura Médica en Viajes?",
    component: FamilyMedicalCoverage,
  },
  {
    title:
      "Problemas con el portal y protección de la información\n" +
      "Tengo dificultad para acceder al portal de beneficios, ¿Qué puedo hacer?",
    component: ProblemsAccessingToThePortal,
  },
  {
    title:
      "¿Cómo se protege la información registrada en mi cuenta en el Portal?",
    component: HowToProtectDataInPortal,
  },
  {
    title: "El portal de beneficios, ¿funciona en mi dispositivo móvil?",
    component: PortalSupportsMobile,
  },
];
