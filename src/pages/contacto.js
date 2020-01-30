import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";
import HeroImage from "../images/home/banner-image.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Contacto" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <Components.FlexContainer>
              <Components.Column style={{ flex: 1 }}>
                <h5 className="uppercase font-xs">INFORMACIÓN Y VENTAS</h5>
                <p className="body-l">
                  ¿Aún tienes dudas para adquirir MyBusinessPOS? escríbenos a:{" "}
                  <a href="mailto:ventas@mybusinesspos.com">
                    ventas@mybusinesspos.com
                  </a>
                </p>
                <h5 className="uppercase font-xs" style={{ marginTop: "2rem" }}>
                  SOPORTE
                </h5>{" "}
                <p className="body-l">
                  Si necesitas soporte técnico{" "}
                  <a href="#">contacta a nuestro equipo aquí.</a>
                </p>
              </Components.Column>
              <Components.Column style={{ flex: 1, marginLeft: "3rem" }}>
                <h5 className="uppercase font-xs">Nuestras oficinas</h5>
                <p className="body-l">
                  <strong>Toluca, Estado de México.</strong>
                  <br /> Leona Vicario 1232, Oficina 104. <br /> Col. La
                  Purísima, CP 52156 Metepec. <br />
                  <br />
                  Horario de atención: <br />
                  Lunes a viernes de 9:00 am a 6:00 pm.
                </p>
              </Components.Column>
            </Components.FlexContainer>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
