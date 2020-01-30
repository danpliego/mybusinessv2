import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";

import HeroImage from "../images/soporte/hero-image.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Homologaciones" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Homologaciones" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.Container>
        <Comp.BannerBox>
          <Comp.Width75>
            <iframe
              src="https://www.mybusinesspos.com/homologaciones.aspx?wmode=transparent"
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
          </Comp.Width75>
        </Comp.BannerBox>
      </Comp.Container>
    </Comp.BannerContainer>
  </Layout>
);

export default IndexPage;
