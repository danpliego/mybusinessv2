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
            <h4 style={{ textAlign: "center" }}>¿Olvidaste algo?</h4>
            <p>
              Estás a punto de llevar tu negocio a otro nivel, regresa por tus
              productos y obtén un 10% de descuento en tu siguiente compra.{" "}
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
