import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";
import HeroImage from "../images/contacto.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Contacto" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Contacto" />
    <Components.BannerContainer>
      <Components.BannerImage style={{ height: "900px" }}>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <Components.Row mobile>
              <Components.Column style={{ flex: 1, paddingRight: "3rem" }}>
                <h5 className="uppercase font-xs">INFORMACIÓN Y VENTAS</h5>
                <p className="body-l">
                  ¿Aún tienes dudas para adquirir MyBusinessPOS? escríbenos a:{" "}
                  <a href="mailto:ventas@mybusinesspos.com">
                    ventas@mybusinesspos.com
                  </a>
                </p>
              </Components.Column>
              <Components.Column style={{ flex: 1 }}>
                <h5 className="uppercase font-xs">SOPORTE</h5>{" "}
                <p className="body-l">
                  Si necesitas soporte técnico{" "}
                  <a href="#">contacta a nuestro equipo aquí.</a>
                </p>
              </Components.Column>
            </Components.Row>
            <hr />
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <h5 className="uppercase font-xs">Nuestras oficinas</h5>
              <p className="body-l">
                <strong>Toluca, Estado de México.</strong>
                <br /> Leona Vicario 1232, Oficina 104. <br /> Col. La Purísima,
                CP 52156 Metepec. <br />
                <br />
                <strong>Horario de atención:</strong> <br />
                Lunes a viernes de 9:00 am a 6:00 pm.
              </p>
            </div>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
