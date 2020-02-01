// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/soporte/hero-image.jpg";
import FrequentQuestion from "../../components/faq";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Preguntas Frecuentes"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Preguntas Frecuentes" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <h4 className="extended">MyBusiness POS</h4>
            <FrequentQuestion question="¿Qué es MyBusiness POS?">
              MyBusiness POS es un programa de administración para Windows que
              se especializa en los negocios de punto de Venta. Gracias a su
              módulo de programación, se puede adaptar a cualquier giro de
              negocio. Por esto último, MyBusiness POS está instalado en más de
              500 giros diferentes de negocio.
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo puedo saber si este programa sirve para mi negocio?">
              Este programa, entre otras cosas te ayudará a controlar las
              siguientes operaciones de tu negocio: Ventas, Compras,
              Inventarios, Cuentas por pagar, cuentas por cobrar, manejo de
              sucursales, etc. Más información…
            </FrequentQuestion>
            <FrequentQuestion question="¿Puedo probar el sistema?">
              Lo puedes hacer sin costo y por 30 días, puedes descargarlo aqui:
              Descarga MyBusiness POS
            </FrequentQuestion>
            <FrequentQuestion question="¿Cuáles son los requisitos para su instalación?">
              Debes contar con un sistema operativo Windows 7 service pack 1 o
              superior, incluyendo el nuevo Windows 10.
            </FrequentQuestion>
            <FrequentQuestion question="¿Cuáles son las características de la licencia?">
              La licencia es vitalicia, es decir, la pagas una vez y es todo. Es
              por máquina, es decir, de acuerdo al número de máquinas en donde
              desees tener acceso al sistema,es el número de licencias a
              comprar.
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo puedo capacitarme en el uso de MyBusiness POS?">
              Puedes ver unos video tutoriales que están disponibles sin costo
              para que aprendas a implementar el programa en tu negocio. Ver
              cursos gratuitos
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo debo registrar mi licencia?">
              Puedes seguir el siguiente tutorial: Cómo registrar MyBusiness POS
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo debo instalar MyBusiness POS en Windows 8 o 8.1?">
              Puedes ver el video tutorial que muestra cómo hacerlo: Instalar
              MyBusiness POS en Windows 8 o 8.1
            </FrequentQuestion>
            <h4 className="extended">Facturación electrónica</h4>
            <FrequentQuestion question="¿Cómo debo instalar MyBusiness POS en Windows 8 o 8.1?">
              <ul>
                <li>
                  Un certificado de sello digital, el cual tramitarás con tu
                  FIEL. Mira aquí cómo hacerlo.{" "}
                </li>
                <li>
                  Descargar el módulo para facturar electrónicamente MyCFDI aquí
                </li>
                <li>
                  Timbres fiscales para hacer válidas tus facturas. Regístrate
                  aquí para poder obtener 1 folio de regalo.
                </li>
              </ul>
            </FrequentQuestion>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
