import React from "react";
import styles from "./styles";

export const WhatIsTheBenefitsPortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        El Portal de Beneficios le ofrece la capacidad de poder manejar sus
        beneficios de seguros y asistencias todas las asistencias que su tarjeta
        le ofrece. Esta herramienta le brinda la posibilidad de acceder a sus
        términos y condiciones, emitir certificados de cobertura<sup>(1)</sup> y
        procesar reclamos, reembolsos o siniestros<sup>(1)</sup>{" "}
        convenientemente desde un solo lugar, desde cualquier dispositivo y en
        cualquier parte del mundo donde haya conexión a internet.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.textPrimary}>¿Es usted un nuevo usuario?</div>
      <div className={classes.mt5}>
        Registre su tarjeta en la siguiente página web para acceder a los
        beneficios hoy mismo:{" "}
        <a
          href="https://cardmember-benefits.axa-assistance.us"
          target="_blank"
          rel="noreferrer"
        >
          https://cardmember-benefits.axa-assistance.us
        </a>
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        1- Ciertas restricciones pueden aplicar
      </div>
    </div>
  );
};

export const WhatAreTheUsesOfBenefitsPortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>En este portal, usted podrá:</div>
      <ul>
        <li>
          Acceder a los Términos y Condiciones de los seguros y asistencias
          incluidas en su tarjeta.
        </li>
        <li>
          Generar reclamos, reembolsos o siniestros y verificar el estado de
          estos hasta que sean completados <sup>(1)</sup>.
        </li>
        <li>
          Emitir certificados de Asistencia Médica en Viajes, de Alquiler de
          Vehículos y de Garantía Extendida <sup>(1)</sup>. Para su
          conveniencia, usted recibirá una copia de estos al correo electrónico
          asociado en su cuenta del portal de beneficios.
        </li>
      </ul>
      <div className={classes.caption}>
        1- Ciertas restricciones pueden aplicar
      </div>
    </div>
  );
};

export const WhichIsTheCostOfTheBenefitsPortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        El Portal de Beneficios se ofrece de forma gratuita y exclusiva para
        nuestros tarjetahabientes.
      </div>
    </div>
  );
};

export const HowCanIAccessToThePortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul>
        <li>
          Acceda al portal desde el siguiente enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Si usted es nuevo en el Portal de beneficios, deberá crear un usuario
          en la sección Registración.
        </li>
        <li>
          Si es un cliente recurrente, simplemente ingrese su usuario (el
          usuario será la dirección de correo electrónico que utilizó para
          registrar su cuenta), la contraseña y luego presione “Iniciar Sesión”.
        </li>
      </ul>
      <div className={classes.caption}>
        * Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento.
      </div>
    </div>
  );
};

export const HowCanIRegisterToThePortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Registrarse en el portal de beneficios es un proceso muy sencillo:
      </div>
      <ul>
        <li>
          Acceda al portal desde el siguiente enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>Presione el botón “Registración”.</li>
        <li>Complete todos los datos solicitados y presione “Siguiente”.</li>
        <li>
          Para completar el registro deberá acceder al enlace que fue generado y
          enviado a su correo electrónico con una contraseña temporal.
        </li>
        <li>
          Proceda a crear una contraseña con un mínimo de 8 caracteres
          incluyendo una letra mayúscula, números y caracteres especiales
          (&$#%^*).
        </li>
        <li>
          • Por último, lea y acepte los términos y condiciones y presione
          “Finalizar”. A partir de este momento comience a disfrutar de la
          asistencia y la conveniencia que el portal le ofrece.
        </li>
      </ul>
      <div className={classes.caption}>
        * Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento.
      </div>
    </div>
  );
};

export const WhichAreTheContactPhoneNumbers = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div className={classes.mt20}>
        Puede contactarse telefónicamente las 24 horas, 7 días de la semana,
        llamando al:
      </div>
      <div className={classes.spaceTop} />
      <div>
        <b>+1 (888) 558-2701</b> Estados Unidos, Canadá, Puerto Rico e Islas
        Vírgenes o al,
      </div>
      <div>
        <b>+1 (312) 356-5951</b> Desde el resto del mundo (a través del operador
        internacional)
      </div>
      <div className={classes.spaceTop} />
      <div>Clientes Brasileros</div>
      <div>
        Puede contactarse telefónicamente las 24 horas, 7 días de la semana,
        llamando al:
      </div>
      <div className={classes.spaceTop} />
      <div>
        <b>+ 0-800-042-0393</b> Brasil
      </div>
      <div>
        <b>+ 1 (888) 558-2701</b> Estados Unidos y Canadá
      </div>
      <div>
        <b>+ 1 (312) 356-5951</b> (a través del operador internacional)
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        * Para llamadas realizadas desde teléfonos móviles, los cargos de
        roaming serán responsabilidad del cliente.
      </div>
    </div>
  );
};

export const HowToChangePassword = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>Para modificar su contraseña, siga estos pasos:</div>
      <ul className={classes.mb0}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>Seleccione “Mi Perfil” (parte superior de la página).</li>
        <li>
          Seleccione “Contraseña” para accesar a la sección de a la página
          “Cambiar Contraseña”. Por favor, considere que usted no podrá utilizar
          las últimas seis contraseñas anteriores.
        </li>
        <li>
          Siga los pasos indicados para modificar su contraseña y finalice el
          proceso seleccionando “Actualizar”.
        </li>
      </ul>
    </div>
  );
};

export const HowToResetPassword = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={`${classes.mt0} ${classes.mb0}`}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>Debajo de la opción “Iniciar Sesión” presione “¿Olvidó?”.</li>
        <li>
          Complete la información solicitada. Al finalizar, le enviaremos un
          correo electrónico informando las instrucciones para reestablecer su
          contraseña.
        </li>
      </ul>
    </div>
  );
};

export const HowToChangeEmail = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={`${classes.mt0} ${classes.mb0}`}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione “Mi Perfil” (parte
          superior de la página) y elija “Dirección de correo electrónico”.
        </li>
        <li>
          Siga los pasos indicados para actualizar su dirección de correo
          electrónico y finalice el proceso presionando “Actualizar”.
        </li>
      </ul>
    </div>
  );
};

export const HowToRegisterAdditionalCards = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={classes.mt0}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Seleccione “Mi perfil” (parte superior de la página) y elija
          “Administrar tarjetas”.
        </li>
        <li>
          En la parte inferior ingrese los primeros 10 dígitos de su tarjeta y
          presione “Guardar”. Su nueva tarjeta quedará registrada. Tendrá acceso
          a la información sobre los beneficios, términos y condiciones y el
          manejo de las reclamaciones de esta nueva tarjeta.
        </li>
      </ul>
      <div className={classes.caption}>
        * Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento
      </div>
    </div>
  );
};

export const ShowNewCardBenefits = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Si los primeros 10 dígitos de su nueva tarjeta no cambiaron no es
        necesario volver a registrarla. En caso contrario siga las siguientes
        instrucciones.
      </div>
      <ul className={classes.mt0}>
        <li>
          Acceda a su cuenta a través de{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Seleccione “Mi perfil” (parte superior de la página) y elija
          “Administrar tarjetas”.
        </li>
        <li>
          En la parte inferior de la página, ingrese los primeros 10 dígitos de
          su tarjeta y presione “Guardar”.
        </li>
        <li>Seleccione “Tarjetas & Beneficios” y elija su nueva tarjeta.</li>
        <li>
          Los beneficios, los términos y condiciones de su nueva tarjeta estarán
          disponibles para su revisión. También podrá descargar una copia de sus
          términos y condiciones si así usted lo desea.
        </li>
      </ul>
      <div className={classes.caption}>
        * Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento.
      </div>
    </div>
  );
};

export const ShouldCreateNewAccountOnNewCard = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        No es necesario. Una vez creada su cuenta en el Portal de Beneficios
        puede registrar todas las tarjetas adicionales que usted desee. Para eso
        deberá seguir el siguiente procedimiento:
      </div>
      <ul>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Seleccione “Mi perfil” (parte superior de la página) y elija
          “Administrar tarjetas”
        </li>
        <li>
          En la parte inferior de la página, ingrese los primeros 10 dígitos de
          su tarjeta y presione “Guardar”.
        </li>
        <li>
          En la parte inferior de la página, ingrese los primeros 10 dígitos de
          su tarjeta y presione “Guardar”. Su nueva tarjeta quedará registrada y
          tendrá acceso a la información sobre los beneficios, términos y
          condiciones y el manejo de reclamaciones de esta nueva tarjeta.
        </li>
      </ul>
      <div className={classes.caption}>
        * Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento.
      </div>
    </div>
  );
};

export const WrongDataLoaded = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={`${classes.mt20} ${classes.mb0}`}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione “Mi Perfil” (parte
          superior de la página) y elija “Información Personal”.
        </li>
        <li>
          Proceda a actualizar su Dirección y presione “Actualizar” al final de
          la página
        </li>
      </ul>
    </div>
  );
};

export const HowToChangeAddress = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={`${classes.mt0} ${classes.mb0}`}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione “Mi Perfil” (parte
          superior de la página) y elija “Información Personal”.
        </li>
        <li>
          Proceda a actualizar su Dirección y presione “Actualizar” al final de
          la página.
        </li>
      </ul>
    </div>
  );
};

export const HowToRemoveACard = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={`${classes.mt0} ${classes.mb0}`}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione la sección “Mi
          Perfil” (parte superior de la página) y elija “Administrar Tarjetas”.
        </li>
        <li>
          Identifique la tarjeta que quiere eliminar y presione el icono “ ”, su
          tarjeta será eliminada inmediatamente.
        </li>
        <li>
          No será posible eliminar tarjetas que tengan algún certificado o
          reclamación generados.
        </li>
      </ul>
    </div>
  );
};

export const HowToStartAClaim = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={classes.mt0}>
        <li>
          Puede acceder a los beneficios del Portal a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez en el Portal, en el menú superior seleccione “Reclamaciones”.
          Sobre el margen derecho, encontrará una flecha para seleccionar la
          tarjeta con la que desea abrir el reclamo.
        </li>
        <li>
          Presione el botón azul (Pulse para añadir una reclamación) y siga los
          siguientes pasos:
          <ul className={classes.alphabeticalList}>
            <li>
              Elija el beneficio para el cual desea generar una reclamación.
            </li>
            <li>
              Complete la información solicitada, acepte los términos y
              condiciones y presione “Continuar".
            </li>
            <li>Adjunte los documentos solicitados</li>
            <li>
              Seleccione "Salvar" y luego “Próximo”. En caso de no tener todos
              los documentos puede seleccionar “Cerrar & Subir documentos más
              tarde”
            </li>
          </ul>
        </li>
      </ul>
      <div className={classes.message}>
        Atención: El reclamo no podrá ser iniciado hasta que haya adjuntado
        todos los documentos obligatorios. Si usted no tiene todos los
        documentos necesarios para completar su reclamo, tendrá la oportunidad
        de regresar al portal en cualquier momento para adjuntar los mismos.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        1- Ciertas restricciones pueden aplicar
      </div>
    </div>
  );
};

export const HowToGenerateACert = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <ul className={classes.mt0}>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione “Certificados” (parte
          superior de la página).
        </li>
        <li>
          Seleccione la tarjeta que utilizó para comprar el boleto de su viaje.
        </li>
        <li>Presione el botón azul (Pulse para añadir un certificado)</li>
        <li>
          Complete la información solicitada y acepte los términos y
          condiciones.
        </li>
        <li>
          Su certificado será generado y una copia será enviada al correo
          electrónico registrado en su cuenta.
        </li>
      </ul>
      <div className={classes.caption}>
        1- Ciertas restricciones pueden aplicar. No todas las tarjetas cuentan
        con el beneficio de Asistencia Médica en Viaje. Favor de consultar su
        guía de beneficios para confirmar su cobertura.
      </div>
      <div className={`${classes.caption} ${classes.mt5}`}>
        Para una guía más detallada, verifique la sección “Paso a Paso” al final
        de este documento.
      </div>
    </div>
  );
};

export const ShouldIssueMultipleCerts = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        No tiene que emitir un certificado para cada destino. Su certificado de
        seguro es válido por un año a partir de la fecha que emitió el mismo, y
        cubre sus viajes a los destinos cubiertos por el beneficio siempre y
        cuando la duración de su viaje sea de 31 días.
      </div>
      <div className={classes.spaceTop} />
      <b>Clientes residentes en Brasil</b>
      <div>
        Es obligatorio emitir su Bilhete de seguro de viaje para poder activar
        sus coberturas.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        *Ciertas restricciones pueden aplicar. No todas las tarjetas cuentan con
        el beneficio de Asistencia Médica en Viaje, favor de consultar su guía
        de beneficios para confirmar su cobertura.
      </div>
    </div>
  );
};

export const HowLongInAdvanceShouldIRequestTheCert = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Puede emitir sus certificados en el momento que usted lo desee previo a
        su viaje ya que el portal de beneficios está disponible desde cualquier
        dispositivo siempre y cuando tenga conexión a internet.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        *Cargos de roaming pueden aplicar y son responsabilidad del cliente
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        *Ciertas restricciones pueden aplicar. No todas las tarjetas cuentan con
        el beneficio de Asistencia Médica en Viaje, favor de consultar su guía
        de beneficios para confirmar su cobertura.
      </div>
    </div>
  );
};

export const HowToChangeCertWrongData = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        No se puede corregir un certificado ya emitido. Necesitará emitir un
        nuevo certificado siguiendo los siguientes pasos:
      </div>
      <ul>
        <li>
          Acceda a su cuenta a través del enlace{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Una vez que haya ingresado al portal, seleccione “Certificados” (parte
          superior de la página).
        </li>
        <li>
          Seleccione la tarjeta que utilizó para comprar el boleto de su viaje.
        </li>
        <li>Presione el botón azul (Pulse para añadir un certificado)</li>
        <li>
          Complete la información solicitada y acepte los términos y
          condiciones.
        </li>
        <li>
          Su certificado será generado y una copia será enviada al correo
          electrónico registrado en su cuenta.
        </li>
      </ul>
      <div className={classes.caption}>
        *Para una guía más detallada, verifique la sección “Paso a Paso” al
        final de este documento.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        *Ciertas restricciones pueden aplicar. No todas las tarjetas cuentan con
        el beneficio de Asistencia Médica en Viaje, favor de consultar su guía
        de beneficios para confirmar su cobertura.
      </div>
    </div>
  );
};

export const SchengenPeopleMedicalCoverage = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Sí. El certificado de cobertura médica en viajes cubre todas las
        exigencias de los países que forman parte del tratado Europeo Schengen.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.caption}>
        *Ciertas restricciones pueden aplicar. No todas las tarjetas cuentan con
        el beneficio de Asistencia Médica en Viaje, favor de consultar su guía
        de beneficios para confirmar su cobertura.
      </div>
    </div>
  );
};

export const WhatIsTheSchengenTreaty = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        El Tratado de Schengen es un acuerdo firmado por algunos miembros de la
        Comunidad Europea que promueve la libre circulación de personas en los
        países firmantes. En otras palabras, el Acuerdo de Schengen, como
        también se lo conoce, hace que la presentación del pasaporte en las
        fronteras de estos países no sea obligatoria. Otro factor importante que
        establece el Tratado de Schengen es la obligación de tener una cobertura
        médica en viajes con un mínimo de € 30.000 de cobertura para asegurar la
        atención médica en caso de enfermedad o accidente.
      </div>
      <div className={classes.spaceTop} />
      <div className={classes.message}>
        Atención: Recuerde que el Certificado de Asistencia Médica en Viaje es
        un documento emitido con el objetivo de responder a una necesidad
        migratoria. En caso de que usted requiera de una asistencia, la
        elegibilidad del servicio deberá ser acompañada de los demás documentos
        conforme establecido en los Términos & Condiciones del programa.
      </div>
      <div className={classes.spaceTop} />
      <div>
        Actualmente, los únicos países miembros de la Unión Europea que no
        forman parte del Tratado de Schengen son: Reino Unido e Irlanda. Los
        firmantes son: Austria, Bélgica, Dinamarca, Eslovaquia, Eslovenia,
        España, Estonia, Finlandia, Francia, Grecia, Holanda, Hungría, Islandia,
        Italia, Letonia, Lituania, Luxemburgo, Malta, Noruega, Polonia,
        Portugal, República Checa, Suecia y Suiza. Cuatro nuevos miembros
        permanecen en la fase de ejecución: Liechtenstein, Bulgaria, Rumania y
        Chipre.
      </div>
    </div>
  );
};

export const ShouldPrintTheCert = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        En muchos países no es requerido contar con el certificado impreso, pero
        en otros, como la Comunidad Europa conviene tenerlo, ya que posiblemente
        se le solicite en el ingreso.
      </div>
      <div className={classes.spaceTop} />
      <div>
        Además, si necesita asistencia, para tarjetahabientes de Brasil, el
        “bilhete” es obligatorio para el servicio, por lo que le recomendamos
        tener un acceso fácil (ya sea física o virtualmente).
      </div>
    </div>
  );
};

export const FamilyMedicalCoverage = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Sí, siempre y cuando su tarjeta cuente con la cobertura de asistencia
        médica en viajes, el cónyuge del titular (casado legalmente o en
        concubinato) que viva en la misma dirección del titular e hijos
        dependientes, menores de 23 años que vivan en el mismo domicilio
        declarado del titular.
      </div>
    </div>
  );
};

export const ProblemsAccessingToThePortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div className={classes.mt10}>
        En primer lugar, verifique su conexión a Internet y si puede navegar en
        otros sitios web. Una vez comprobada la conexión:
      </div>
      <ul className={classes.mb0}>
        <li>
          Acceda a{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>
        </li>
        <li>
          Asegúrese de que el correo electrónico y la contraseña sean las
          correctas.
        </li>
        <li>
          Si se utiliza un dispositivo móvil intente activar JavaScript: abra el
          menú de herramientas del navegador de su teléfono móvil y busque la
          opción para habilitar JavaScript.
        </li>
        <li>Si aún tiene dificultades, intente usar una computadora.</li>
        <li>
          Si aún tiene problemas puede contactarnos por correo electrónico a{" "}
          <a
            href="https://cardmember-benefits.axa-assistance.us"
            target="_blank"
            rel="noreferrer"
          >
            https://cardmember-benefits.axa-assistance.us
          </a>{" "}
          o a los teléfonos <b>1(888) 558-2701</b> desde Estados Unidos, Canadá,
          Puerto Rico y Las Islas Vírgenes o <b>+1 (312) 356-5951</b> Desde el
          resto del mundo (a través del operador internacional).
        </li>
        <li>
          Clientes Brasileros favor de comunicarse a los siguientes números de
          contacto:
        </li>
      </ul>
      <div>
        <b>+ 0-800-042-0393</b> Brasil
      </div>
      <div>
        <b>+ 1 (888) 558-2701 </b> Estados Unidos y Canadá
      </div>
      <div>
        <b>+ 1 (312) 356-5951</b> (a través del operador internacional)
      </div>
    </div>
  );
};

export const HowToProtectDataInPortal = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        En AXA nos centramos en cuidar la confianza depositada por nuestros
        clientes. Sabemos que la protección y el tratamiento de los datos
        registrados son temas importantes para conservar esa relación. Por ello,
        utilizamos tecnologías avanzadas y diferentes medidas de seguridad -
        como criptografías, padrones de industria, autenticaciones multicamada,
        etc. – para asegurar la información que usted almacena en la cuenta del
        Portal de Beneficios.
      </div>
    </div>
  );
};

export const PortalSupportsMobile = () => {
  const classes = styles();

  return (
    <div className={classes.mainText}>
      <div>
        Usted puede acceder al portal de beneficios a través de cualquier
        dispositivo móvil con conexión a internet.
      </div>
      <div className={classes.spaceTop} />
      <div>
        Si tiene dificultades o recibe un mensaje de error al acceder al Portal
        desde su dispositivo móvil, siga los siguientes pasos:
      </div>
      <div className={classes.spaceTop} />
      <b>Active JavaScript en Safari para iOS (iPhone, iPod, iPad).</b>
      <ul className={classes.mt0}>
        <li>Seleccione el ícono “Settings” (Configuración).</li>
        <li>
          Desplácese hacia abajo hasta encontrar “Safari". Elija la imagen para
          abrir la página de opciones.
        </li>
        <li>
          Seleccione la opción "JavaScript". De esta forma, usted habrá activado
          JavaScript en Safari para iOS.
        </li>
      </ul>
      <b>Active JavaScript en el navegador de Android.</b>
      <ul className={classes.mt0}>
        <li>
          Seleccione “Aplicaciones" en el teléfono. Elija la opción "Browser".
        </li>
        <li>Presione en el botón del menú del navegador.</li>
        <li>Seleccione "Avanzado " en la pantalla de “Configuración”.</li>
        <li>
          Marque la casilla junto a "Activar JavaScript" para activar la opción.
        </li>
      </ul>
      <div>
        Si el error persiste se aconseja llevar a cabo el procedimiento a través
        de su computadora.
      </div>
      <div className={classes.spaceTop} />
      <div>
        <b>Nota:</b> En dispositivos Android el portal funciona sin
        inconvenientes, así como también en los navegadores Chrome y Mozilla
        para Android.
      </div>
    </div>
  );
};
