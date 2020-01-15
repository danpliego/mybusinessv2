import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";

import HeroImage from "../images/home/hero-image.png";
import ProductPlaceholder from "../images/home/placeholder.png";
import ProductColumn from "../components/ProductColumn";
import { theme } from "../components/theme";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row mobile>
          <HeroContent style={{ paddingTop: "2rem" }}>
            <h1 className="extended">
              La forma simple de administrar tu negocio.{" "}
            </h1>
            <p className="body-l">
              MyBusiness POS es el sistema de punto de venta que hará tu vida
              más sencilla, con su gran precio, su facilidad de uso y su
              experiencia en el mercado. Da clic y compruébalo tu mismo.
            </p>
            <Comp.ButtonPrimary>Pruebalo gratis</Comp.ButtonPrimary>
            <Comp.ButtonSecondary style={{ marginLeft: "1.5rem" }}>
              ¿Cómo funciona?
            </Comp.ButtonSecondary>
          </HeroContent>
          <Comp.Column flex={1}>
            <img src={HeroImage} alt="MyBusiness" />
          </Comp.Column>
        </Comp.Row>
      </Hero>
    </Comp.Container>
    <BlueArea>
      <Comp.Container>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Venta de Tiempo Aire"
            description="Aumenta tus ganancias ofreciendo recargas de tiempo aire y pago de servicios. "
            link="/venta-de-tae"
            image={ProductPlaceholder}
          />
          <ProductColumn
            title="Facturación Electrónica"
            description="Adquiere paquetes de timbres y otorga facturas electrónicas en tu negocio."
            link="/facturacion-electronica"
            image={ProductPlaceholder}
          />
          <ProductColumn
            title="Corporativos"
            description="Controla tus sucursales o franquicias con un sistema adaptado a la medida."
            link="/corporativos"
            image={ProductPlaceholder}
          />
          <ProductColumn
            title="Servicios en la nube"
            description="Respalda toda tu información y accede a ella en el momento que lo necesites."
            link="/servicios-en-la-nube"
            image={ProductPlaceholder}
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
`;

export const BlueArea = styled.div`
  margin-top: 6rem;
  background: #f0f4f6;
`;
