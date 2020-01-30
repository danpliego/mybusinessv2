// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/soporte/hero-image.jpg";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Manuales" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Manuales" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "2rem" }}></Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
