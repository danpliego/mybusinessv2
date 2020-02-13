// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";

import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/descargas.jpg";
import Box2017 from "../../images/mybusiness/boxMBP2017.png";
import Box2012 from "../../images/mybusiness/boxMBP2012.jpg";
import Box2011 from "../../images/mybusiness/boxMBP2011.gif";
import Box2010 from "../../images/mybusiness/boxMBP2010.jpg";
import SectionTitle from "../../components/sectionTitle";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Descargas: My Business POS"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Descargas: My Business POS" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <Components.Row
              mobile
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #f4f4f4"
              }}
            >
              <Components.Column style={{ minWidth: "236px" }}>
                <img src={Box2017} />
              </Components.Column>
              <Components.Column style={{ marginLeft: "2rem" }}>
                <h4 className="extended" style={{ margin: "1rem 0 0" }}>
                  MyBusiness POS 2017
                </h4>
                <p className="body-l">¡Pruébalo por 30 días! </p>
                <Components.ButtonPrimary
                  small
                  as="a"
                  href="http://mybusinesspos.com/Downloads/SetupMyBusinessPOS2017.zip"
                >
                  Descargar ahora{" "}
                </Components.ButtonPrimary>
                <p style={{ marginTop: "2rem" }} className="font-xs">
                  <strong>Requisitos para su instalación:</strong>Windows 7
                  Service Pack 1 o superior.
                </p>
                <p className="font-xs">
                  <strong>Nota importante: </strong>Se debe ejecutar el sistema
                  como administrador, dando clic derecho sobre el ícono de
                  MyBusiness POS y seleccionando Ejecutar como administrador.
                </p>
                <p className="font-xs">
                  <strong>Otras descargas:</strong>
                  <a href="http://mybusinesspos.com/Downloads/TripticoMyBusinessPOS2017.pdf">
                    Tríptico informativo (.pdf)
                  </a>{" "}
                  |{" "}
                  <a href="http://mybusinesspos.com/Downloads/MyBusinessPOS-2017-Manual-del-Usuario.pdf">
                    Manual de usuario (.pdf)
                  </a>
                </p>
              </Components.Column>
            </Components.Row>

            <Components.Row
              mobile
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #f4f4f4"
              }}
            >
              <Components.Column style={{ minWidth: "236px" }}>
                <img src={Box2012} />
              </Components.Column>
              <Components.Column style={{ marginLeft: "2rem" }}>
                <h4 className="extended" style={{ margin: "1rem 0 0" }}>
                  MyBusiness POS 2012
                </h4>
                <p className="body-l">¡Pruébalo por 30 días! </p>
                <Components.ButtonPrimary
                  small
                  as="a"
                  href="http://mybusinesspos.com/Downloads/SetupMyBusinessPOS2012.zip"
                >
                  Descargar ahora{" "}
                </Components.ButtonPrimary>
                <p style={{ marginTop: "2rem" }} className="font-xs">
                  <strong>Requisitos para su instalación: </strong>Windows XP
                  Service Pack 3 o superior.
                </p>
                <p className="font-xs">
                  <strong>Nota importante: </strong>De Windows 7 en adelante se
                  debe ejecutar el sistema como Administrador, dando clic
                  derecho sobre el ícono de MyBusiness POS y seleccionando
                  Ejecutar como administrador.
                </p>
                <p className="font-xs">
                  <strong>Otras descargas: </strong>
                  <a href="http://mybusinesspos.com/Downloads/TripticoMyBusinessPOS2012.pdf">
                    Tríptico informativo (.pdf)
                  </a>{" "}
                  |{" "}
                  <a href="http://mybusinesspos.com/Downloads/ManualMyBusinessPOS2012.pdf">
                    Manual de usuario (.pdf)
                  </a>
                </p>
              </Components.Column>
            </Components.Row>

            <Components.Row
              mobile
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #f4f4f4"
              }}
            >
              <Components.Column>
                <img
                  src={Box2011}
                  style={{ width: "236px", maxWidth: "none" }}
                />
              </Components.Column>
              <Components.Column style={{ marginLeft: "2rem" }}>
                <h4 className="extended" style={{ margin: "1rem 0 0" }}>
                  MyBusiness POS 2011
                </h4>
                <p className="body-l">¡Pruébalo por 30 días! </p>
                <Components.ButtonPrimary
                  small
                  as="a"
                  href="http://mybusinesspos.com/Downloads/SetupMyBusinessPOS2011.zip"
                >
                  Descargar ahora{" "}
                </Components.ButtonPrimary>
                <p style={{ marginTop: "2rem" }} className="font-xs">
                  <strong>Requisitos para su instalación: </strong>Windows 7, 8
                  y 10. Mínimo 2 GB de RAM. Disco Duro con 500 GB. Procesador
                  Mínimo 3.2 GHZ.
                </p>
              </Components.Column>
            </Components.Row>

            <Components.Row
              mobile
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #f4f4f4"
              }}
            >
              <Components.Column>
                <img
                  src={Box2010}
                  style={{ width: "236px", maxWidth: "none" }}
                />
              </Components.Column>
              <Components.Column style={{ marginLeft: "2rem" }}>
                <h4 className="extended" style={{ margin: "1rem 0 0" }}>
                  MyBusiness POS 2010
                </h4>
                <p className="body-l">¡Pruébalo por 30 días! </p>
                <Components.ButtonPrimary
                  small
                  as="a"
                  href="http://mybusinesspos.com/Downloads/SetupMyBusinessPOS2010.zip"
                >
                  Descargar ahora{" "}
                </Components.ButtonPrimary>
                <p style={{ marginTop: "2rem" }} className="font-xs">
                  <strong>Requisitos para su instalación: </strong>Windows 7, 8
                  y 10. Mínimo 2 GB de RAM. Disco Duro con 500 GB. Procesador
                  Mínimo 3.2 GHZ.
                </p>
              </Components.Column>
            </Components.Row>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
