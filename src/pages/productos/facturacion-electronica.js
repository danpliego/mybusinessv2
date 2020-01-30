// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/facturacion/hero-image.jpg";
import SectionTitle from "../../components/sectionTitle";
import BoletinBanner from "../../components/boletinBanner";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Facturación Electrónica"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Facturación Electrónica" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">contenido here</h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ textAlign: "center", paddingBottom: "0" }}>
        <p className="font-lg">contenido here</p>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
