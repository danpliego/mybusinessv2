// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import LinkColumn from "../../components/LinkColumn";
import SEO from "../../components/seo";

import HeroImage from "../../images/home/banner-image.png";
import MyBusiness from "../../images/icons/mybusiness.png";
import Facturacion from "../../images/icons/factura.png";
import TiempoAire from "../../images/icons/tiempo-aire.png";
import Servicios from "../../images/icons/contabilidad.png";
import PosTools from "../../images/icons/pos-tools.png";
import BillPocket from "../../images/icons/bill-pocket.png";
import Desarrollo from "../../images/icons/otros.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Productos" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Productos" />
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
                link="/productos/my-business"
                image={MyBusiness}
                buttonText="Visitar"
              />
              <LinkColumn
                title="Facturación electrónica"
                link="/productos/facturacion-electronica"
                image={Facturacion}
                buttonText="Visitar"
              />
              <LinkColumn
                title="Tiempo Aire"
                link="/productos/tiempo-aire"
                image={TiempoAire}
                buttonText="Visitar"
              />

              <LinkColumn
                title="Servicios en la Nube"
                link="/productos/servicios-en-la-nube"
                image={Servicios}
                buttonText="Visitar"
              />

              <LinkColumn
                title="POS Tools"
                link="/productos/pos-tools"
                image={PosTools}
                buttonText="Visitar"
              />

              <LinkColumn
                title="BillPocket"
                link="/productos/bill-pocket"
                image={BillPocket}
                buttonText="Visitar"
              />

              <LinkColumn
                title="Desarrollo a la Medida"
                link="/productos/desarrollo-a-la-medida"
                image={Desarrollo}
                buttonText="Visitar"
              />
            </Components.Row>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
