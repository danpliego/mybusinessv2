// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/soporte/hero-image.jpg";
import FrequentQuestion from "../../components/faq";
import SEO from "../../components/seo";
import { Link } from "gatsby";

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
              sucursales, etc.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mybusinesspos.com/Downloads/TripticoMyBusinessPOS2017.pdf"
              >
                Más información…
              </a>
            </FrequentQuestion>
            <FrequentQuestion question="¿Puedo probar el sistema?">
              Lo puedes hacer sin costo y por 30 días, puedes descargarlo aqui:{" "}
              <Link to="/descargas/my-business">Descarga MyBusiness POS</Link>
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
              para que aprendas a implementar el programa en tu negocio.{" "}
              <Link to="/capacitacion/cursos-virtuales-gratuitos">
                Ver cursos gratuitos
              </Link>
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo debo registrar mi licencia?">
              Puedes seguir el siguiente tutorial:{" "}
              <a
                href="https://www.youtube.com/watch?v=37DBmS9Z5UA&list=UUi_8G1xiSsOoB9vpv7lQrRg&feature=c4-overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo registrar MyBusiness POS
              </a>
            </FrequentQuestion>
            <FrequentQuestion question="¿Cómo debo instalar MyBusiness POS en Windows 8 o 8.1?">
              Puedes ver el video tutorial que muestra cómo hacerlo:{" "}
              <a
                href="https://www.youtube.com/watch?v=rXGJ4TdAb0c&list=UUi_8G1xiSsOoB9vpv7lQrRg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instalar MyBusiness POS en Windows 8 o 8.1
              </a>
            </FrequentQuestion>
            <h4 className="extended">Facturación electrónica</h4>
            <FrequentQuestion question="¿Cómo debo instalar MyBusiness POS en Windows 8 o 8.1?">
              <ul>
                <li>
                  Un certificado de sello digital, el cual tramitarás con tu
                  FIEL.{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://videos.mybusinesspos.net/FacturaElectronica/ImplementaLaFactura_Parte1/ImplementaLaFactura_Parte1.html"
                  >
                    Mira aquí cómo hacerlo.
                  </a>
                </li>
                <li>
                  Descargar el módulo para facturar electrónicamente MyCFDI{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.mybusinesspos.com/Downloads/MyCFDI.zip"
                  >
                    aquí
                  </a>
                </li>
                <li>
                  Timbres fiscales para hacer válidas tus facturas.{" "}
                  <a
                    href="https://cfdimobile.mybusinesspos.net/Registrarse.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Regístrate aquí para poder obtener 1 folio de regalo.
                  </a>
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
