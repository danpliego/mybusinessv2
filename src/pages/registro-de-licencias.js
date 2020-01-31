// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import SectionTitle from "../components/sectionTitle";

import HeroImage from "../images/contacto.jpg";
import * as Components from "../components/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Registro de Licencias"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Registro de Licencias" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} style={{ height: "650px" }} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "4rem" }}>
            <p>
              Si aún no registras tu licencia, existen dos formas de hacerlo.
            </p>
            <p>
              1.- Desde MyBusiness POS, siguiendo{" "}
              <a href="https://mybusinesspos.com/downloads/manuales/Registro%20en%20linea%202017.pdf">
                este pequeño tutorial
              </a>
            </p>
            <p>
              2.- Si no cuentas internet en tu sucursal, rellena este formulario
              para generar tu código de registro.
            </p>
            <iframe
              src="https://activaserie.mybusinesspos.net?wmode=transparent"
              width="100%"
              height="750px"
              frameBorder="0"
            ></iframe>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
