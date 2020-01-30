// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";

import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/descargas.jpg";
import SectionTitle from "../../components/sectionTitle";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Aviso de Privacidad"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Descargar My Business Pos" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "2rem" }}>
            hey
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
