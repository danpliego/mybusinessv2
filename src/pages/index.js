import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import ProductPlaceholder from "../images/home/placeholder.png";
import ProductColumn from "../components/ProductColumn";
import { theme } from "../components/theme";

import HeroImage from "../images/home/hero-image.png";
import BannerImage from "../images/home/banner-image.png";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row mobile>
          <HeroContent style={{ paddingTop: "4rem" }}>
            <h1 className="extended" style={{ margin: "2rem 0" }}>
              La forma simple de administrar tu negocio.{" "}
            </h1>
            <p className="body-l" style={{ marginBottom: "2rem" }}>
              MyBusiness POS es el sistema de punto de venta que hará tu vida
              más sencilla, con su gran precio, su facilidad de uso y su
              experiencia en el mercado. Da clic y compruébalo tu mismo.
            </p>
            <Comp.ButtonContainer>
              <Comp.ButtonPrimary to="/productos/mybusiness">
                Pruebalo gratis
              </Comp.ButtonPrimary>
            </Comp.ButtonContainer>
          </HeroContent>
          <Comp.Column flex={1} style={{ marginTop: "-2rem" }}>
            <img
              src={HeroImage}
              alt="MyBusiness POS sistema de punto de venta gratis"
            />
          </Comp.Column>
        </Comp.Row>
      </Hero>
    </Comp.Container>
    <BlueArea>
      <RowButtons>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Venta de Tiempo Aire"
            description="Aumenta tus ganancias ofreciendo recargas de tiempo aire y pago de servicios. "
            link="/productos/tiempo-aire"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
          <ProductColumn
            title="Facturación Electrónica"
            description="Adquiere paquetes de timbres y otorga facturas electrónicas en tu negocio."
            link="/productos/facturacion-electronica"
            image={ProductPlaceholder}
            buttonText="Más información"
            secondaryLink="/facturacion-electronica-comprar"
          />
          <ProductColumn
            title="Corporativos"
            description="Controla tus sucursales o franquicias con un sistema adaptado a la medida."
            link="/corporativos"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
          <ProductColumn
            title="Servicios en la nube"
            description="Respalda toda tu información y accede a ella en el momento que lo necesites."
            link="/productos/servicios-en-la-nube"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
        </Comp.Row>
      </RowButtons>
      <Comp.BannerContainer>
        <img
          src={BannerImage}
          alt="MyBusiness POS sistema de punto de venta gratis"
        />
        <Comp.BannerContent>
          <h1 className="extended-medium">
            MyBusiness POS es el sistema de punto de venta que hará tu vida más
            sencilla gracias a su facilidad de uso, su gran precio y su
            experiencia en el mercado.
          </h1>
          <p>Alejandra Anzures - Lectora</p>
        </Comp.BannerContent>
      </Comp.BannerContainer>
      <Comp.Container style={{ marginTop: "3rem" }}>
        <h4 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Más soluciones para tu Negocio.
        </h4>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Billpocket"
            description="Incrementa las visitas a tu establecimiento recibiendo pagos con tarjeta."
            link="/productos/bill-pocket"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
          <ProductColumn
            title="POS Tools"
            description="Controla el inventario, ventas y pagos de tu negocio desde tu celular."
            link="/productos/pos-tools"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
          <ProductColumn
            title="Desarrollo a la medida"
            description="El único sistema de punto de venta que puede adecuarse a las necesidades específicas de tu giro comercial. "
            link="/desarrollo-a-la-medida"
            image={ProductPlaceholder}
            buttonText="Más información"
          />
        </Comp.Row>
      </Comp.Container>
    </BlueArea>
  </Layout>
);

export default IndexPage;

export const Hero = styled.div``;

export const HeroContent = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 45%;
    padding-right: 3rem;
  }

  @media ${theme.breakpoint.onlyMobile} {
    margin-bottom: 2rem;
  }
`;

export const BlueArea = styled.div`
  background: #f0f4f6;
  padding: 3rem 0;
`;

export const RowButtons = styled(Comp.Container)`
  padding: 1.5rem;
`;
