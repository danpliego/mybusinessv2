// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import styled from "styled-components";
import { BlueArea } from "../index";
import BoletinBanner from "../../components/boletinBanner";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/pos-tools/hero-image.jpg";
import Circle1 from "../../images/circle-1.png";
import Circle2 from "../../images/circle-2.png";
import GooglePlay from "../../images/google-play.png";
import { theme } from "../../components/theme";

const IndexPage = () => (
  <Layout>
    <SEO title="POS Tools" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle
      name="POS Tools"
      subtitle="Administra tu negocio desde donde estés."
    />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          POS TOOLS es la aplicación de MyBusiness POS, que te permite realizar
          las mismas operaciones que haces en tu punto de venta principal, pero
          desde tu celular.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ textAlign: "center", paddingBottom: "0" }}>
        <p className="body-l">En el sistema encontrarás módulos como:</p>
      </Comp.Width75>
    </Comp.Container>
    <ProductBlueArea>
      <Comp.Container>
        <Comp.Row mobile>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended"> Punto de venta </p>
              <p className="extended">Control de inventario</p>
              <p className="extended">Venta y pedidos en ruta</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle2} />
            <div>
              <p className="extended">Venta de tiempo aire electrónico</p>
              <p className="extended">Facturación electrónica</p>
              <p className="extended">Autofacturación</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended">Sincronización con sucursales.</p>
              <p className="extended">Lector de código QR.</p>
              <p className="extended">
                Cobro con efectivo, tarjeta de crédito o débito, PaypalMR y
                PayuMR
              </p>
            </div>
          </CircleContainer>
        </Comp.Row>
        <Comp.Width50>
          <h2 className="extended text-center">
            Descárgala gratis y descubre lo sencillo que es controlar tu
            negocio.{" "}
          </h2>
          <a
            href="https://play.google.com/store/apps/details?id=postools.mybusinesspos.com"
            style={{ display: "block", textAlign: "center", marginTop: "2rem" }}
          >
            <img src={GooglePlay} width="200" />
          </a>
        </Comp.Width50>
      </Comp.Container>
    </ProductBlueArea>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;

export const ProductBlueArea = styled(BlueArea)`
  margin-top: 10rem;

  > div {
    margin-top: -10rem;
  }
`;

export const CircleContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 4rem;
  position: relative;

  > div {
    position: absolute;
    z-index: 1;
    top: 0;
    text-align: center;
    left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 1.5rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1.25rem;
    }
  }

  span {
    position: absolute;
    bottom: -3rem;
  }
`;
