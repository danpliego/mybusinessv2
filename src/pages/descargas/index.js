// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import LinkColumn from "../../components/LinkColumn";

import HeroImage from "../../images/home/banner-image.png";
import MyBusiness from "../../images/icons/mybusiness.png";
import Facturacion from "../../images/icons/factura.png";
import TiempoAire from "../../images/icons/tiempo-aire.png";

const IndexPage = () => (
  <Layout>
    <SectionTitle name="Descargas" />
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
                  title="MyBusiness"
                  link="/descargas/my-business"
                  image={MyBusiness}
                  buttonText="Descarga"
                />
              </Components.Flex1>
              <Components.Flex1>
                <LinkColumn
                  title="Facturación electrónica"
                  link="/descargas/facturacion-electronica"
                  image={Facturacion}
                  buttonText="Descarga"
                />
              </Components.Flex1>
              <Components.Flex1>
                <LinkColumn
                  title="Tiempo Aire"
                  link="/descargas/tiempo-aire"
                  image={TiempoAire}
                  buttonText="Descarga"
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
