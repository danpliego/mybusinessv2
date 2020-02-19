// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import styled from "styled-components";
import { BlueArea } from "../index";

import HeroImage from "../../images/mybusiness/hero-image.jpg";
import Circle1 from "../../images/circle-1.png";
import Circle2 from "../../images/circle-2.png";
import MyForm from "../../components/download_form";
import SectionTitle from "../../components/sectionTitle";
import BoletinBanner from "../../components/boletinBanner";
import { Link } from "gatsby";
import { theme } from "../../components/theme";

const IndexPage = () => (
  <Layout>
    <SEO title="MyBusiness" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="MyBusiness POS" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h2 className="extended-medium" style={{ marginBottom: "3rem" }}>
          MyBusiness POS funciona como punto de venta de abarrotes, farmacias,
          ferreterías, carnicerías, papelerías, refaccionarias, tlapalerías y
          muchos comercios más…
        </h2>
        <div className="text-center">
          <Comp.ButtonInverse to="/tienda-virtual/my-business">
            Comprar ahora
          </Comp.ButtonInverse>
        </div>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ textAlign: "center", paddingBottom: "0" }}>
        <h1 className="extended">
          Llevar un control total de tu negocio ahora es más sencillo.
        </h1>
        <p className="body-l">En el sistema encontrarás módulos como:</p>
      </Comp.Width75>
    </Comp.Container>
    <ProductBlueArea>
      <Comp.Container>
        <Comp.Row mobile style={{ marginBottom: "3rem" }}>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended">Ventas</p>
              <p className="extended">Compras</p>
              <p className="extended">Control de inventario</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle2} />
            <div>
              <p className="extended">Clientes</p>
              <p className="extended">Cuentas por cobrar</p>
              <p className="extended">Cuentas por pagar</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended">Facturación electronica</p>
              <p className="extended">Pago de servicios</p>
              <p className="extended">Proveedores</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle2} />
            <div>
              <p className="extended">Programación *</p>
              <p className="extended">Venta de recargas electrónicas</p>
              <p className="extended">y más...</p>
              <span className="body-l font-sm">
                * se adapta a tu giro de negocio.
              </span>
            </div>
          </CircleContainer>
        </Comp.Row>
        <Comp.Width75>
          <h2 className="extended text-center">Características</h2>
          <ul className="font-xl">
            <li>Fácil de usar</li>
            <li>Licencia por máquina.</li>
            <li>Sistema operativo Windows</li>
            <li>
              Puedes cambiar a la versión más reciente pagando una
              actualización.
            </li>
          </ul>
        </Comp.Width75>
        <Comp.Width50 style={{ paddingBottom: "0" }}>
          <h3 className="extended text-center">Descarga la prueba gratis</h3>
          <MyForm
            successText={
              <>
                Todo listo! Descarga la version de prueba de MyBusiness POS{" "}
                <a href="https://mybusinesspos.com/Downloads/SetupMyBusinessPOS2017.zip">
                  aquí
                </a>
              </>
            }
          />
        </Comp.Width50>
        <Comp.Width50>
          <div className="text-center">
            <h3 className="extended text-center">
              o compra la versión completa
            </h3>
            <Comp.ButtonDownload as={Link} to="/tienda-virtual/my-business">
              Comprar ahora
            </Comp.ButtonDownload>
          </div>
        </Comp.Width50>
      </Comp.Container>
    </ProductBlueArea>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;

export const ProductBlueArea = styled(BlueArea)`
  @media ${theme.breakpoint.upFromMobile} {
    margin-top: 10rem;
    > div {
      margin-top: -10rem;
    }
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
