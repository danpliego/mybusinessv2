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
                    Ventas@MyBusinessPOS.com
                  </a>
                </p>
              </Components.Column>
              <Components.Column style={{ flex: 1 }}>
                <h5 className="uppercase font-xs">SOPORTE</h5>{" "}
                <p className="body-l">
                  Si necesitas soporte técnico contacta a nuestro equipo{" "}
                  <a href="javascript:void(window.open('https://chat.mybusinesspos.net/chat.php?a=a1da5','','width=590,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))">
                    aquí.
                  </a>
                </p>
              </Components.Column>
            </Components.Row>
            <hr />
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <h5 className="uppercase font-xs">Nuestras oficinas</h5>
              <p>
                <strong>MyBusiness POS</strong>
              </p>
              <p className="body-l">
                <strong>Toluca, Estado de México.</strong>
                <br />
                <a href="tell:722740404">722 74 04 04</a>
                <br />
                <a href="tell:722740404">(800) 350 6070</a>
                <br />
                <br /> Leona Vicario 1232, Oficina 104. <br /> Col. La Purísima,
                CP 52156 Metepec. <br />
                <br />
                <strong>Horario de atención:</strong> <br />
                Lunes a viernes de 8:00 am a 6:00 pm.
              </p>
            </div>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
