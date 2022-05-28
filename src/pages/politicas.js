// eslint-disable-next-line
import React from "react";
import Layout from "../components/layout";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";

import HeroImage from "../images/home/banner-image.png";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Políticas de Venta, Entrega, Cancelación y Servicio"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Políticas de Venta, Entrega, Cancelación y Servicio" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ fontSize: ".9rem" }}>
            <p style={{ textTransform: "underline" }}>DEFINICIONES.</p>
            <p style={{ marginBottom: 0 }}>
              El <strong>“SISTEMA”</strong> se denomina a la licencia
              electrónica del Software de Punto de Venta{" "}
              <strong>MYBUSINESS POS.</strong>
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>“MBPD”</strong>
              es la empresa{" "}
              <strong>MYBUSINESS POS DESARROLLOS, S. A. DE C. V.</strong>, dueña
              de los derechos del SISTEMA.
            </p>
            <p style={{ marginBottom: 0 }}>
              El <strong>“USUARIO”</strong> representa a los Usuarios del
              SISTEMA.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>“TIMBRES”</strong> son los paquetes de facturas
              electrónicas por emitirse.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>
                LAS PRESENTES POLÍTICAS APLICAN AL SOFTWARE “MYBUSINESS POS”.
                POR FAVOR LÉALAS CUIDADOSAMENTE.
              </strong>
            </p>
            <p>
              IMPORTANTE: El SISTEMA puede descargarse de la zona de Descargas
              de la página{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>,
              instalarse y usarse durante treinta días naturales en modo
              demostrativo con el cien por ciento de su funcionalidad. Después
              de ese lapso, le aparecerá continuamente una pantalla para
              registrarse y deberá adquirir la licencia electrónica original o,
              de lo contrario, deberá desinstalarlo. Al adquirir el SISTEMA
              usted exteriorizará la manifestación de su voluntad en quedar
              obligado en los términos y condiciones de las presentes políticas.
              Si usted NO desea aceptar estas políticas y el software no ha sido
              registrado, desinstálelo ahora mismo; en caso contrario, quedará
              obligado en los siguientes términos y condiciones.
            </p>
            <p>
              VENTA. Si usted adquirió el SISTEMA en{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>,
              deberá descargar el instalable del SISTEMA de la zona de Descargas
              de la página{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>,
              instalarlo conforme a las instrucciones de instalación que se
              encuentran especificadas en dicha zona de Descargas y registrarlo
              accediendo a la opción “Acerca de…” dentro del SISTEMA. El USUARIO
              deberá asegurarse de establecer los procedimientos y métodos de
              control, tanto de Sistemas como Administrativos, que aseguren la
              adecuada utilización del SISTEMA. Queda bajo la exclusiva
              responsabilidad del USUARIO, la instalación, mantenimiento y
              adaptación del SISTEMA respecto de su equipo de cómputo, sistemas
              y\o programas operativos y aplicativos, así como de la operación y
              uso de este SISTEMA con objeto de satisfacer sus necesidades
              particulares; y de realizar los respaldos correspondientes al
              SISTEMA. MBPD no se responsabiliza del mal uso del software,
              prácticas administrativas deficientes, fallas derivadas del
              software de terceros, así como tampoco de las fallas derivadas por
              problemas del hardware, daño o fallo en la base de datos o fallas
              de las redes de cómputo, así como tampoco de las fallas por la
              infraestructura de energía eléctrica, ni de cualquier otra falla
              ajena al SISTEMA. El uso de un no-break que proporcione energía
              ininterrumpida, y su buen uso, es obligatorio. Una vez que el
              sistema ha sido correctamente registrado, bien sea en línea o a
              través de una solicitud de registro enviada a{" "}
              <a href="mailto:Registro@MyBusinessPOS.com">
                Registro@MyBusinessPOS.com
              </a>
              , MBPD otorga y confiere a favor del USUARIO una licencia de uso,
              no exclusiva e intransferible del SISTEMA. La presente licencia es
              limitada en su uso a UNA terminal ejecutándose en una única
              instancia, extendiéndose el contenido obligacional del presente
              contrato a todo USUARIO del SISTEMA.
            </p>
            <p>
              <strong>ENTREGA</strong>. La entrega se hace en formato
              electrónico. Al realizar su compra le llegará, al email registrado
              en dicha compra, un archivo PDF con el Certificado de
              Autenticidad, que incluye el “Número de Serie” del SISTEMA., así
              como el Contrato y Licencia de Uso. Usted debe registrar el
              software accediendo a la opción “Acerca de…” dentro del SISTEMA y
              capturando ahí los datos que se le solicitan, incluyendo el
              “Número de Serie”. En ningún caso MBPD estará obligado a
              proporcionar al USUARIO versiones del SISTEMA en código fuente,
              sin únicamente en código objeto.
            </p>
            <p>
              <strong>CANCELACIONES Y DEVOLUCIONES. </strong> Debido a que el
              SISTEMA se puede probar por treinta días naturales con toda su
              funcionalidad antes de adquirirlo, no hay devoluciones ni
              cancelaciones.
            </p>
            <p>
              <strong>SERVICIO</strong>. Una vez registrado el SISTEMA, puede
              solicitar asesoría en el chat de la página{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>
              en los siguientes treinta días naturales a la fecha del registro,
              en días y horas hábiles. Posterior a este lapso, los servicios de
              asesoría respecto a uso, operación o aplicaciones del SISTEMA,
              podrá solicitarlos a MBPD, previo al pago de los honorarios
              correspondientes que en ese momento tenga establecidos y bajo los
              lineamientos y políticas que MBPD determine, para lo cual también
              en forma previa, el USUARIO deberá hacer llegar a MBPD el “Número
              de Serie” del SISTEMA. De ninguna manera, a través de la
              celebración de este contrato, MBPD adquiere la obligación con el
              USUARIO del mantenimiento del SISTEMA, entendiéndose por tal, la
              prestación de servicios de asesoría o la entrega de modificaciones
              que impliquen una mejora al SISTEMA, de actualizaciones, nuevas
              versiones o modificaciones al material impreso o digital ya
              aludido. El USUARIO sólo tendrá derecho a obtener actualizaciones,
              mejoras, nuevas versiones del SISTEMA o material impreso o digital
              (manual(es) del usuario), cuando haya proporcionado el número de
              serie del SISTEMA y previo el pago de los cargos que para tales
              efectos MBPD tenga establecidos.
            </p>
            <p>
              <strong>
                LAS PRESENTES POLÍTICAS APLICAN A LOS “TIMBRES”. POR FAVOR
                LÉALAS CUIDADOSAMENTE.
              </strong>
            </p>
            <p>
              <strong>VENTA</strong>
              Al adquirir TIMBRES de la página{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>,
              éstos podrán ser usados en el SISTEMA para generar facturas
              electrónicas al RFC especificado al momento de la compra. Dichos
              TIMBRES también podrán usarse en e portal de facturación
              <strong>www.CFDIMobile.com.</strong>
            </p>
            <p>
              <strong>ENTREGA.</strong> La entrega se hace de manera inmediata
              en formato electrónico. Al realizar su compra le llegará, al email
              registrado, una notificación de la compra y simultáneamente se le
              sumará el volumen de TIMBRES adquirido al RFC especificado.
            </p>
            <p>
              CANCELACIONES Y DEVOLUCIONES. Se podrán realizar cancelaciones y
              devoluciones de la venta de los TIMBRES siempre y cuando no hayan
              pasado más de siete días naturales a partir de la fecha de la
              adquisición y no hayan sido usados. En caso de requerirse, deberá
              enviar un correo a{" "}
              <a href="mailto:Registro@MyBusinessPOS.com">
                Registro@MyBusinessPOS.com
              </a>{" "}
              el motivo de la Cancelación, el RFC asociado, su comprobante de
              pago y la cuenta bancaria a la que deberá hacerse el reembolso; en
              un lapso de siete días naturales se realizará la devolución del
              dinero.
            </p>
            <p>
              SERVICIO. Usted puede solicitar soporte en el chat de
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>
            </p>
            <p>
              A manera informativa el USUARIO podrá utilizar el chat de nuestra
              página Web{" "}
              <a href="http://www.MyBusinessPOS.com">www.MyBusinessPOS.com</a>{" "}
              para cualquier consulta o comentario en relación a las siguientes
              políticas en días y horas hábiles.
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
