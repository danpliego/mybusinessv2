// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import LinkColumn from "../../components/LinkColumn";

import HeroImage from "../../images/soporte/hero-image.jpg";
import Ayuda from "../../images/icons/ayuda.png";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Soporte" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Soporte" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "2rem 0" }}>
            <Components.FlexCenterChild>
              <Components.Flex1>
                <LinkColumn
                  title="Preguntas Frecuentes"
                  link="/soporte/preguntas-frecuentes/"
                  image={Ayuda}
                  buttonText="Visitar"
                />
              </Components.Flex1>
              <Components.Flex1>
                <LinkColumn
                  title="Manuales"
                  link="/soporte/manuales/"
                  image={Ayuda}
                  buttonText="Visitar"
                />
              </Components.Flex1>
              <Components.Flex1>
                <LinkColumn
                  title="Video Tutoriales"
                  link="/soporte/video-tutoriales/"
                  image={Ayuda}
                  buttonText="Visitar"
                />
              </Components.Flex1>
            </Components.FlexCenterChild>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
