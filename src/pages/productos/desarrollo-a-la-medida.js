// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/desarrollo-a-la-medida/hero-image.jpg";
import SectionTitle from "../../components/sectionTitle";
import BoletinBanner from "../../components/boletinBanner";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Desarrollo a la medida"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Desarrollo a la medida" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">contenido here...</h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
