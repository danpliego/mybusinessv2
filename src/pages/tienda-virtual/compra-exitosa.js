// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";

import * as Components from "../../components/layoutComponents";
import SectionTitle from "../../components/sectionTitle";
import SEO from "../../components/seo";

import HeroImage from "../../images/mybusiness/hero-image.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Tienda Virtual" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Tienda Virtual: MyBusiness POS" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <h4 style={{ textAlign: "center" }}>¡Gracias por tu compra!</h4>
            <p>
              Has decidido llevar tu negocio a otro nivel. Y para que explotes
              por completo tu punto de venta, te recomendamos ver nuestros
              cursos gratuitos de implementación.{" "}
            </p>
            <p>
              No olvides suscribirte a nuestro boletín y seguirnos en nuestras
              redes sociales para enterarte de nuestras promociones y tutoriales
              antes que nadie.
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
