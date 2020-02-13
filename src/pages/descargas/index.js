// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import LinkColumn from "../../components/LinkColumn";

import HeroImage from "../../images/descargas.jpg";
import MyBusiness from "../../images/icons/mybusiness.png";
import Facturacion from "../../images/icons/factura.png";
import TiempoAire from "../../images/icons/tiempo-aire.png";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Descargas" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Descargas" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "2rem 0" }}>
            <Components.Row mobile>
              <LinkColumn
                title="MyBusiness POS"
                link="/descargas/my-business"
                image={MyBusiness}
                buttonText="Descarga"
              />
              <LinkColumn
                title="Facturación electrónica"
                link="/descargas/facturacion-electronica"
                image={Facturacion}
                buttonText="Descarga"
              />
              <LinkColumn
                title="Tiempo Aire"
                link="/descargas/tiempo-aire"
                image={TiempoAire}
                buttonText="Descarga"
              />
            </Components.Row>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
