// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import LinkColumn from "../../components/LinkColumn";

import HeroImage from "../../images/capacitacion/hero-image.jpg";
import MyBusiness from "../../images/icons/mybusiness.png";
import Facturacion from "../../images/icons/factura.png";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Capacitación" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Capacitación" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width50 style={{ padding: "2rem 0" }}>
            <Components.FlexCenterChild>
              <Components.Flex1>
                <LinkColumn
                  title="Cursos Virtuales Gratuitos"
                  link="/capacitacion/cursos-virtuales-gratuitos"
                  image={MyBusiness}
                  buttonText="Visitar"
                />
              </Components.Flex1>
              <Components.Flex1>
                <LinkColumn
                  title="Cursos virtuales con costo"
                  link="/capacitacion/cursos-virtuales-con-certificacion"
                  image={Facturacion}
                  buttonText="Visitar"
                />
              </Components.Flex1>
            </Components.FlexCenterChild>
          </Components.Width50>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
